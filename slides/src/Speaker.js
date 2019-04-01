import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Link,
  Notes
} from "spectacle";
import "./style.scss";

import logotwitter from "./assets/images/twitter.svg";
import logogithub from "./assets/images/github.svg";
import logowebsite from "./assets/images/website.svg";
import reactbeerlille from "./assets/images/reactbeerlille.jpg";

const Speaker = ({
  name,
  job,
  company,
  companyIcon,
  avatar,
  bg,
  website,
  twitter,
  github
}) => (
  <Slide id={`${name}`} transition={["fade"]} bgImage={bg} bgDarken={0.75}>
    <Heading size={1} caps textColor="primary">
      {name}
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      {job} chez {company}
    </Text>
    <div className="speaker">
      <Image
        className="speaker__company-icon"
        src={companyIcon}
        alt={companyIcon}
        width={50}
      />
      <div className="speaker__avatar-border" />
      <Image
        className="speaker__avatar"
        src={avatar}
        alt={avatar}
        width={180}
      />
    </div>

    <List className="speaker__social">
      {website && (
        <ListItem className="speaker__social-item">
          <Image className="speaker__social-img" src={logowebsite} width={30} />
          <Link
            className="speaker__social-link"
            title={`Go to ${website}`}
            target="_blank"
            href={website}
          >
            <span className="speaker__social-text">{website}</span>
          </Link>
        </ListItem>
      )}
      {twitter && (
        <ListItem className="speaker__social-item">
          <Image className="speaker__social-img" src={logotwitter} width={30} />
          <Link
            className="speaker__social-link"
            title={`Go to http://twitter.com/${twitter}`}
            target="_blank"
            href={`http://twitter.com/${twitter}`}
          >
            <span className="speaker__social-text">@{twitter}</span>
          </Link>
        </ListItem>
      )}
      {github && (
        <ListItem className="speaker__social-item">
          <Image className="speaker__social-img" src={logogithub} width={30} />
          <Link
            className="speaker__social-link"
            title={`Go to https://github.com/${github}`}
            target="_blank"
            href={`https://github.com/${github}`}
          >
            <span className="speaker__social-text">{github}</span>
          </Link>
        </ListItem>
      )}
    </List>
    <div className="community">
      <Image
        className="community-icon"
        src={reactbeerlille}
        alt={reactbeerlille}
        width={"100%"}
      />
    </div>
    <Notes>
      <h4>Slide notes</h4>
      <ol>
        <li>Développeur depuis 12 ans</li>
        <li>Chez axa depuis 7 ans</li>
        <li>Developpeur front depuis 2 ans</li>
        <li>Spécialisé dans le React JS/ES6</li>
        <li>Ma passion est le trail Running</li>
      </ol>
    </Notes>
  </Slide>
);

export default Speaker;
