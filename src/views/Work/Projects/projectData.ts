import ClipistyImage from '../../../assets/img/Clipisty.png'
import MonitrilhoImage from '../../../assets/img/Monitrilho.png'
import DownloadsOrganizer from '../../../assets/img/DownloadsOrganizer.png'

export const projects = [
  {
    id: 1,
    title: 'Clipisty',
    description:
      'A lightweight clipboard manager built with Tauri & React, designed for older Windows systems and VMs. Quickly access and paste your clipboard history with Ctrl + Alt + V for a seamless workflow.',
    link: 'https://github.com/pedroblimaa/Clipisty',
    image: ClipistyImage,
  },
  {
    id: 2,
    title: 'Monitrilho',
    description:
      'A simple, cross-platform app built with Electron & React to tweak brightness in real-time. Save your favorite settings and enjoy a hassle-free experience on Windows, macOS, and Linux.',
    link: 'https://github.com/pedroblimaa/Monitrilho',
    image: MonitrilhoImage,
  },
  {
    id: 3,
    title: 'Downloads Organizer',
    description:
      'A Python script to organize your downloads folder by file type. Keep your downloads folder clean and organized by running this script periodically.',
    link: 'https://github.com/pedroblimaa/downloadsOrganizer',
    image: DownloadsOrganizer,
  },
]
