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

assemble(["hand-stone-poster-improved.b64"],
 "hand-stone-introduction-poster-v2.jpg", 89179, "799cf9b3f009a2c7d6d02068b24ce35618ea45fbdcdb32937d390c4663dafbf9");

assemble(Array.from({length: 19}, (_,i) => "kw-chair-intro-" + String(i).padStart(2,"0") + ".b64"),
 "kw-chair-massage-introduction.mp4", 4885828, "5fe7e65434d4fd2230e873d11f26b45497f1a69afe78516a870bf25c2b1f2e12");

assemble(Array.from({length: 20}, (_,i) => "takoda-intro-" + String(i).padStart(2,"0") + ".b64"), "takoda-introduction.mp4", 5151673, "14d4125a3b8e3bc758e466c8fa0877e605bb0f38603a224deafd3b7aae0843d9");
assemble(["takoda-poster-00.b64"], "takoda-introduction-poster.jpg", 54499, "23cf83545f46dc4dc4cd2346d24331a6633e963944482723b41b986dc07f7060");

assemble(["takoda-logo.b64"], "takoda-equine-logo.png", 19293, "efbb0e22fc0e2d36049e6878956be6a82d4484f6cbcdf38faed8f4c4a25a065f");
