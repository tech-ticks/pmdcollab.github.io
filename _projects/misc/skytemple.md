---
title: SkyTemple
short_description: >-
    ROM editor for Pokémon Mystery Dungeon: Explorers of Sky
permalink: /skytemple
icon: media/misc/skytemple/icon.png
cover_video: media/misc/skytemple/skytemple-release-trailer.mp4
cover_image: media/misc/skytemple/cover.jpg
highlighted: true
priority: 0 # Sort order. 0 is the highest priority

discord_guild_id: 710190644152369162
discord_guild_name: "SkyTemple / EoS ROM Hacking"
links:
    "Discord": "https://discord.gg/4e3X36f"
    "Website": "https://skytemple.org"
    "Project Pokémon": "https://projectpokemon.org/home/forums/topic/57303-pmd2-skytemple-rom-editor-maps-scripts-debugger/"
    "YouTube": "https://www.youtube.com/parakoopa"
    "Twitch": "https://twitch.tv/parakoopa"
    "GitHub": "https://github.com/SkyTemple"
---

SkyTemple is a Pokémon Mystery Dungeon: Explorers of Sky.
It is available for Linux, macOS and Windows.

It allows you to edit most of the data and graphics in the game, see below for a full feature list.

## Features

### Map Background Editor
![Map Background Editor](https://projectpokemon.org/home/uploads/monthly_2020_12/mapbg.png.bc96d57a6ca9a0960136cd2d57a44426.png)

Lets you view and edit the backgrounds of the map. Supports importing map backgrounds from image files. The collision of the map can also be changed.

### Scene Editor
![Scene Editor](https://projectpokemon.org/home/uploads/monthly_2020_12/scenes.png.da087e474ba0b668c8747e3545629708.png)

Lets you edit the position of Pokémon and Objects on the overworld maps and change how cutscenes are built.

### Script Editor / Debugger
![Script Editor / Debugger](https://projectpokemon.org/home/uploads/monthly_2020_12/debugger.png.21fac819d9cbaf8ef5b46539467f234e.png)

Lets you edit the script files of the game and debug them in realtime.

#### Script Editing
You can edit all scripts in the game with features like auto-completion and calltips.

#### Debugging
You can set breakpoints and let the game halt at different parts of the code.

#### Debug Overlay
A debug overlay shows you where objects, triggers and Pokémon are rendered and what their hitboxes are.

#### Game State
View the current state of the Ground Engine, the game's script engine: 
What scripts and scenes are currently loaded and which actors and objects are placed on the map?

#### Variables
View and modify the current game variables in real time.

#### ExplorerScript
ExplorerScript is a new high level language that the scripts in SkyTemple are written in. It is compiled to the binary code (SSB) that the game uses.

### Dungeon Editor
![Dungeon Editor](https://projectpokemon.org/home/uploads/monthly_2020_12/dungeon.png.cad099995cb18652cd8257b70d4c18c1.png)
Edit and create your own dungeons and customize the spawns for each floor.

### Dungeon Tileset Editor
![Dungeon Tileset Editor](https://projectpokemon.org/home/uploads/monthly_2020_12/dungeon_tilesets.png.a5ba33dc184221999a92a43d153e177f.png)
Edit the graphics of dungeon tilesets.

### Fixed Room / Boss Fight Editor
![Fixed Room / Boss Fight Editor](https://projectpokemon.org/home/uploads/monthly_2020_12/fixed.png.08a41a4ac826bbd6d46cee174ffef45b.png)
Edit treasure rooms and boss fights, create entirely new bosses and assign them to dungeons however you like.

### Ground Lists
![Ground Lists](https://projectpokemon.org/home/uploads/monthly_2020_12/worldmap.png.3047af68f709a55d8b6e32b334422e5f.png)
Change various lists in the game, such as the starters, the recruitment list, a list of placeable NPCs (actors) or the world map.

### Pokémon Data
![Pokémon Data](https://projectpokemon.org/home/uploads/monthly_2020_12/monster.png.156a2f04f0ce7158bb8a57aba9c585cf.png)
Edit the data of Pok&eacute;mon, including stats, move learnsets and portraits.

### More Features

* Apply ASM patches to add new functionality to the game
* Edit misc. graphics, such as the fonts or the message borders
* Edit all text in the game

## Downloads (Linux, Mac, Windows)
Can be found on [Project Pokémon](https://projectpokemon.org/home/files/file/4193-skytemple-pmd2-rom-edtior/).
