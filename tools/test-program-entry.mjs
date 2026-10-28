import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),ts=require('typescript');
const source=await readFile(fileURLToPath(new URL('../src/lib/program-journey-url.ts',import.meta.url)),'utf8');
const scope={URL,exports:{}};
vm.runInNewContext(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,scope);
const build=scope.exports.programJourneyUrl;
const incoming='https://binahub.id/id/?utm_source=email&utm_campaign=program&email=person@example.invalid&token=private&utm_content=person@example.invalid';
for(const destination of ['/id/rekomendasi-program','https://app.binahub.id/discovery']){
 const target=new URL(build(destination,incoming));
 assert.equal(target.searchParams.get('utm_source'),'email');assert.equal(target.searchParams.get('utm_campaign'),'program');
 assert.equal(target.searchParams.get('email'),null);assert.equal(target.searchParams.get('token'),null);assert.equal(target.searchParams.get('utm_content'),null);
}
const id='11111111-1111-4111-8111-111111111111';
assert.equal(new URL(build('/id/rekomendasi-program','https://binahub.id/?bh_journey='+id)).searchParams.get('bh_journey'),id);
assert.equal(new URL(build('/id/rekomendasi-program','https://binahub.id/?bh_journey=private')).searchParams.get('bh_journey'),null);
console.log('PASS: program entry attribution, internal and app handoff, no private query data.');
