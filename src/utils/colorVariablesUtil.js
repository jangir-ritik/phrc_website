import { colors } from "../lib/colors.js";
import fs from "fs";
import path from "path";

/**
 * Generates CSS color variables from a colors object and appends them to globals.css
 * @param {Object} colorObject - Object containing color definitions
 * @param {string} targetFile - Path to the CSS file where variables should be appended
 * @returns {void}
 */
export function generateColorVariables(
  colorObject = colors,
  targetFile = "src/app/globals.css"
) {
  try {
    // Ensure target directory exists
    const targetDir = path.dirname(targetFile);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Read existing content or create file if it doesn't exist
    let existingContent = "";
    if (fs.existsSync(targetFile)) {
      existingContent = fs.readFileSync(targetFile, "utf-8");
    }

    // Generate CSS variables dynamically from color object
    const colorVariables = Object.entries(colorObject)
      .map(([key, value]) => `    --${key}: ${value};`)
      .join("\n");

    const newVariables = `
:root {
${colorVariables}
}
`;

    // Only append if the variables don't already exist
    if (!existingContent.includes(":root {")) {
      const updatedContent = existingContent + newVariables;
      fs.writeFileSync(targetFile, updatedContent, "utf-8");
      console.log(`✅ Color variables successfully appended to ${targetFile}`);
    } else {
      console.log(
        "⚠️ Color variables already exist in the file. Skipping append."
      );
    }
  } catch (error) {
    console.error("❌ Error generating color variables:", error.message);
    throw error;
  }
}

// Example usage
generateColorVariables();
