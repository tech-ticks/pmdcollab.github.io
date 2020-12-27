 const WEBHOOK_URL = 'https://discordapp.com/api/webhooks/792533561240453161/79lmotaSiA25jvcZL-_4poR-LuWDfXffCYyrgsBZHUpOiISA1hNRbKzph_6T-yNvIYxx';

function saveFile(blob, name) {
  // Seems like you still need to do this to save a file in 2020
  let a = document.createElement('a');
  document.body.appendChild(a);
  let url = URL.createObjectURL(blob);
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, 0);
}

async function sendWebhook(blob, fileName, meta, data) {
  let formData = new FormData();
  let metaFile = new Blob([meta], { type: 'text/plain' });

  let { username, title, short_description, notes } = data;

  let message = `New submission: "${title}" by @${username}

Description:
> ${short_description}

Notes:
> ${notes}
`;

  formData.append('file1', metaFile, 'meta.json');
  formData.append('file2', blob, fileName);
  formData.append('payload_json', JSON.stringify({
    content: message
  }));

  let response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Webhook failed.');
  }

}

function createWebFriendlyTitle(title) {
  // Replace é with e and replace non-word chars with dashes
  return title.toLowerCase().replace(/é/g, 'e').replace(/[^\w]+/g, '-');
}

function createMarkdownPage(dataMap, linkMap) {
  let webFriendlyTitle = createWebFriendlyTitle(dataMap.title);
  let category = dataMap.category;

  let links = Object.entries(linkMap).length == 0
    ? ''
    : 'links:\n' + Object.entries(linkMap).map(([name, url]) => 
        `    "${name}": "${url}"`).join('\n');

  return `---
title: ${dataMap.title}
short_description: >-
    ${dataMap.short_description}
permalink: /${webFriendlyTitle}
icon: media/${category}/${webFriendlyTitle}/icon.jpg
${dataMap.cover_video ? 'cover_video: !!!! ADD VIDEO MANUALLY !!!!' : ''}
cover_image: media/${category}/${webFriendlyTitle}/cover.jpg

discord_guild_id: ${dataMap.discord_guild_id}
discord_guild_name: "${dataMap.discord_guild_name}"
${links}
---

${dataMap.content}
`;
}

document.addEventListener('DOMContentLoaded', () => {
  let markdownEditor = new SimpleMDE({ element: document.getElementById('content') });

  async function submit() {
    let allData = Array.from(
      document.querySelectorAll('.form-group input, .form-group textarea, .form-group select')
    ).map(elem => ({
      name: elem.name,
      linkName: elem.getAttribute('data-linkname'),
      value: elem.value,
      file: elem.files ? elem.files[0] : undefined,
    }));

    allData.push({ name: 'content', value: markdownEditor.value() });

    let dataMap = allData.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});

    let linkMap = allData.filter(data => data.linkName && data.value)
      .reduce((acc, curr) => {
        acc[curr.linkName] = curr.value;
        return acc;
      }, {});

    let webFriendlyTitle = createWebFriendlyTitle(dataMap.title);
    let pageContent = createMarkdownPage(dataMap, linkMap);
    
    let zip = new JSZip();
    zip.file(`_projects/${dataMap.category}/${webFriendlyTitle}.md`, pageContent);
    let mediaFolder = zip.folder(`media/${dataMap.category}/${webFriendlyTitle}`);
    let imagesToAdd = [
      { name: 'icon', upload: allData.find(d => d.name == 'icon').file},
      { name: 'cover', upload: allData.find(d => d.name == 'cover_image').file}
    ];

    for (let image of imagesToAdd) {
      let [, extension] = image.upload.name.split('.');
      extension ??= 'jpg';

      await new Promise(resolve => {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          mediaFolder.file(`${image.name}.${extension}`, fileReader.result);
          resolve();
        }
        fileReader.readAsArrayBuffer(image.upload);
      });
    }
    
    let fileName = `${webFriendlyTitle}.zip`;
    let zipBlob = await zip.generateAsync({ type: 'blob' });    
    let metaJson = JSON.stringify(allData);
    await sendWebhook(zipBlob, fileName, metaJson, dataMap);
  }

  let submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', async evt => {
    evt.preventDefault();

    let form = document.getElementById('submit-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = 'Submitting...';

    try {
      await submit();
      alert('Submission successful.');
    } catch (e) {
      alert('Something went wrong during submission. Please send us the detailed '
        + 'error message in the console on Discord.');
      console.error(e);
    }

    submitButton.disabled = false;
    submitButton.innerText = 'Submit';
  });
});
