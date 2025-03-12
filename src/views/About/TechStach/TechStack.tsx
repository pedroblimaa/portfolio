
import { ReactSVG } from 'react-svg'

import './TechStack.scss'
import Angular from '../../../assets/tech-stack/angular.svg';
import Docker from '../../../assets/tech-stack/docker.svg';
import Electron from '../../../assets/tech-stack/electron.svg';
import Git from '../../../assets/tech-stack/git.svg';
import Java from '../../../assets/tech-stack/java.svg';
import Kubernetes from '../../../assets/tech-stack/kubernetes.svg';
import Node from '../../../assets/tech-stack/node.svg';
import Postman from '../../../assets/tech-stack/postman.svg';
import Python from '../../../assets/tech-stack/python.svg';
import React from '../../../assets/tech-stack/react.svg';
import Rust from '../../../assets/tech-stack/rust.svg';
import VSCode from '../../../assets/tech-stack/vscode.svg';



function TechStack() {
  return <div className='tech-stack-container'>
    <h1>Tech Stack</h1>
    <div className="tech-container">
      <ReactSVG src={Angular} />
      <ReactSVG src={Kubernetes} />
      <ReactSVG src={React} />
      <ReactSVG src={Node} />
      <ReactSVG src={Python} />
      <ReactSVG src={Docker} />
      <ReactSVG src={Git} />
      <ReactSVG src={Electron} />
      <ReactSVG src={Rust} />
      <ReactSVG src={VSCode} />
      <ReactSVG src={Postman} />
      <ReactSVG src={Java} />
    </div>
  </div>
}

export default TechStack