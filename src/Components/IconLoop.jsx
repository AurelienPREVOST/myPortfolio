import React, { useEffect } from 'react';
import bootstrap from '../assets/illustrations/logos/bootstrap.svg'
import cobol from '../assets/illustrations/logos/cobol.svg'
import css3 from '../assets/illustrations/logos/css3.svg'
import docker from '../assets/illustrations/logos/docker.svg'
import expo from '../assets/illustrations/logos/expo.svg'
import figma from '../assets/illustrations/logos/figma.svg'
import github from '../assets/illustrations/logos/github.svg'
import gitlab from '../assets/illustrations/logos/gitlab.svg'
import heroku from '../assets/illustrations/logos/heroku.svg'
import html5 from '../assets/illustrations/logos/html5.svg'
import linux from '../assets/illustrations/logos/linux.svg'
import mongodb from '../assets/illustrations/logos/mongodb.svg'
import mysql from '../assets/illustrations/logos/mysql.svg'
import node from '../assets/illustrations/logos/node.svg'
import ovh from '../assets/illustrations/logos/ovh.svg'
import penpot from '../assets/illustrations/logos/penpot.svg'
import postgresql from '../assets/illustrations/logos/postgresql.svg'
import prisma from '../assets/illustrations/logos/prisma.svg'
import rails from '../assets/illustrations/logos/rails.svg'
import redux from '../assets/illustrations/logos/redux.svg'
import ruby from '../assets/illustrations/logos/ruby.svg'
import solidworks from '../assets/illustrations/logos/solidworks.svg'
import sql from '../assets/illustrations/logos/sql.svg'
import stripe from '../assets/illustrations/logos/stripe.svg'
import tailwind from '../assets/illustrations/logos/tailwind.svg'
import terminal from '../assets/illustrations/logos/terminal.svg'
import trello from '../assets/illustrations/logos/trello.svg'
import typescript from '../assets/illustrations/logos/typescript.svg'
import ubuntu from '../assets/illustrations/logos/ubuntu.svg'
import ue from '../assets/illustrations/logos/ue.svg'
import vite from '../assets/illustrations/logos/vite.svg'


function IconLoop() {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, [])

  const icons = [bootstrap, cobol, css3, docker, expo, figma, github, gitlab, heroku, html5, linux, mongodb, mysql, node, ovh, penpot, postgresql, prisma, rails, react, redux, ruby, solidworks, sql, stripe, tailwind, terminal, trello, typescript, ubuntu, ue, vite];

  return (
    <div className="logos">
      <div className="logos-slide">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default IconLoop;
