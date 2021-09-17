export default {
  _: '\n\n',
  ___: '<hr />',
  br: '\n<br />\n',
  headTitle: title => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: title => `<title>${title}</title>\n`,
  h1: contents => `<h1>${contents}</h1>`,
  h2: contents => `<h2>${contents}</h2>`,
  h3: contents => `<h3>${contents}</h3>`,
  div: contents => `<div>${contents}</div>`,
  fromNotion: fromNotion,
  todo: (checked, contents) => `<TodoItem checked={${checked}}>${JSON.stringify(contents)}</TodoItem>`
}

function fromNotion(block) {
  if (block.has_children)
    return [block.id + ' ' + block.type + ' has children', '']

  const t = block.type
  switch (t) {
    case 'heading_1':
      return [this.h1(
        block.heading_1.text.map(s => s.plain_text).join('')
      ), '']

    case 'heading_2':
      return [this.h2(
        block.heading_2.text.map(s => s.plain_text).join('')
      ), '']

    case 'heading_3':
      return [this.h3(
        block.heading_3.text.map(s => s.plain_text).join('')
      ), '']

    case 'to_do':
      return [this.todo(
        block.to_do.checked,
        block.to_do.text.map(s => s.plain_text).join('')
      ), "import TodoItem from '$lib/TodoItem.svelte'"]

    default:
      break;
  }

  return [block.type, '']
}