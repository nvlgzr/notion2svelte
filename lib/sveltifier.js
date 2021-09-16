export default {
  _: '\n\n',
  ___: '<hr />',
  headTitle: title => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: title => `<title>${title}</title>\n`,
  h1: contents => `<h1>${contents}</h1>`,
  div: contents => `<div>${contents}</div>`,
  fromNotion: fromNotion
}

function fromNotion(block) {
  if (block.has_children) {
    return block.id + ' ' + block.type + ' has children'
  }
  if (block.type === 'heading_1') return this.h1(
    block.heading_1.text.map(s => s.plain_text).join('')
  )
  return block.type
}