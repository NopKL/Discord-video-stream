import { exec } from "child_process";

export async function extractDirectLink(url) {
  return new Promise((resolve, reject) => {
    exec(`yt-dlp -g ${url}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`[yt-dlp error] ${stderr}`);
        reject(error);
      } else {
        const directUrl = stdout.trim();
        resolve(directUrl);
      }
    });
  });
}
