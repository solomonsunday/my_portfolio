import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url?: string;
  github_url?: string;
  category?: Category[];
  key_techs?: string[];
}

export interface ICertificate extends IProject {
  cert_url?: string;
  image_path: string;
}

export type Category =
  | "react"
  | "node"
  | "redux"
  | "bootstrap"
  | "rest_api"
  | "postgres"
  | "mssql"
  | "tailwind"
  | "nextjs"
  | "figma"
  | "Material UI"
  | "solidity"
  | "docker"
  | "AWS";
