// Why do this ↓ instead of just using Date.now()? Mostly
//
// Mostly because this is more fun. Having just learned about the
// [options available to Date.toLocaleString() et al](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters),
// I think it's super cool that all of these globalized customizations
// exist, and I think it's fun to see them in action.
//
// On a more practical level, it's very difficult to tell when a new
// row has been added based on staring at timestamps. Their uniformity
// makes it so you can't tell one from another without careful parsing.
// For instance, if you glance at this timestamp…
//
//   1639990054843
//
// then look away, and glance back to see this:
//
//   1639990504843
//
// Can you tell whether the entry has changed? The shape from one to
// the next is too similar to tell at a glance.
//
// Now let's compare two subsequent timestamps from world-timestamp.js:
//
//   Monday, Agrahayana ೨೯, ೧೯೪೩ Saka, ೦೧:೦೪:೫೪
//
// Got it? Now, without looking here again ↑, is this a new entry?
//
//   Monday, December 二〇, 二〇二一, 〇一:〇四:五六
//
// Clearly, this one's new, right? 🤠
//

const numberingSystem = [
  'fullwide',
  'hanidec',
  'knda',
  'beng',
  'deva',
  'gujr',
  'tibt',
  'tamldec',
  'thai',
  'khmr',
  'laoo',
  'orya',
  'mymr',
  'limb',
  'mlym',
  'mong',
  'bali'
].at(Math.random() * 15);

const calendar = [
  'buddhist',
  'chinese',
  'coptic',
  'ethiopia',
  'ethiopic',
  'gregory',
  'hebrew',
  'indian',
  'islamic',
  'iso8601',
  'japanese',
  'persian',
  'roc'
].at(Math.random() * 12);

const generateTimestamp = new Date().toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  calendar: calendar,
  numberingSystem: numberingSystem,
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  hourCycle: 'h23',
  minute: 'numeric',
  second: 'numeric'
});

export default generateTimestamp;
