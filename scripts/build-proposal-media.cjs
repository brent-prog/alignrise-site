// Reconstruct approved public proposal media from GitHub text blobs at build time.
// Never store video bytes in a server-side JS module. Built assets are served statically.
const fs = require("node:fs");
const path = require("node:path");
const {createHash} = require("node:crypto");
const root = path.resolve(__dirname, "..");
const transfer = path.join(root, "media", "_transfer");
const output = path.join(root, "public", "proposal-media");
fs.mkdirSync(output, {recursive: true});
function assemble(names, outputName, expectedBytes, expectedSha256) {
 const encoded = names.map(name => fs.readFileSync(path.join(transfer, name), "utf8").trim()).join("");
 if(!/^[a-zA-Z0-9+/]*={0,2}$/.test(encoded)) throw new Error(outputName + ": malformed Base64");
 const bytes = Buffer.from(encoded, "base64");
 const sha = createHash("sha256").update(bytes).digest("hex");
 if(bytes.length !== expectedBytes || sha !== expectedSha256) {
   throw new Error(outputName + ": media checksum/length mismatch; got " + bytes.length + " bytes, sha " + sha);
 }
 fs.writeFileSync(path.join(output, outputName), bytes);
 console.log("Verified media:",outputName, bytes.length,"bytes",sha);
}
assemble(Array.from({length: 16}, (_,i) => "hand-stone-intro-" + String(i).padStart(2,"0") + ".b64"),
 "hand-stone-introduction.mp4", 3983476, "2d197e005567552e4dbb856a6e2000c86e441e95c3c60550596e9a1d4551951f");
assemble(["hand-stone-intro-poster.b64"],
 "hand-stone-introduction-poster.jpg", 40959, "3702969e074113fdcf63bcab1818e8c96e63bb0f267e1af5b3d6f303ee7d9e32");
