import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  HeaderContent,
  FooterContent,
  EthicsNoticeContent,
} from "@/types/global";

const contentDirectory = path.join(process.cwd(), "content", "global");

export function getHeaderContent(): HeaderContent {
  const filePath = path.join(contentDirectory, "header.md");
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return data as HeaderContent;
}

export function getFooterContent(): FooterContent {
  const filePath = path.join(contentDirectory, "footer.md");
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return data as FooterContent;
}

export function getEthicsNoticeContent(): EthicsNoticeContent {
  const filePath = path.join(contentDirectory, "ethics-notice.md");
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return data as EthicsNoticeContent;
}
