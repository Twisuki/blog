// 从源 README 中提取 Waka 统计内容，替换目标文件中同名标记之间的内容
// 用法: node scripts/update-waka.mjs <源 README 路径> <目标文件路径>
import { readFileSync, writeFileSync } from 'node:fs';

const START = '<!--START_SECTION:waka-->';
const END = '<!--END_SECTION:waka-->';

const [sourcePath, targetPath] = process.argv.slice(2);
if (!sourcePath || !targetPath) {
  console.error('用法: node scripts/update-waka.mjs <源 README 路径> <目标文件路径>');
  process.exit(1);
}

// 取出两个标记之间的正文（不含标记本身）
const extract = (text, file) => {
  const start = text.indexOf(START);
  const end = text.indexOf(END);
  if (start === -1 || end === -1 || end < start) {
    console.error(`::error::在 ${file} 中未找到 Waka 标记`);
    process.exit(1);
  }
  return text.slice(start + START.length, end).trim();
};

const waka = extract(readFileSync(sourcePath, 'utf8'), sourcePath);
const target = readFileSync(targetPath, 'utf8');

// 校验目标文件确实有可替换的区块
extract(target, targetPath);

const updated = target.replace(
  new RegExp(`${START}[\\s\\S]*?${END}`),
  `${START}\n\n${waka}\n\n${END}`,
);

writeFileSync(targetPath, updated);
console.log(`已更新 ${targetPath}`);
