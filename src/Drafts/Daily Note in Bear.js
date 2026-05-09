let d = new Date()

// draft.setTemplateTag('daily-long-title', dailyLongTitle);

let title = strftime(d, `%Y-%m-%d Daily Note for %A`)
let dailyLongTitle = strftime(d, `%A, %d.%m.%Y (week %V & day: %j)`)
let tagYear = strftime(d, `%Y`)
let tagMonth = strftime(d, `%Y %m`)

var template = `#dailies# #dailies/${tagYear}# #dailies/${tagYear}/${tagMonth}# 

---
*${dailyLongTitle}*
---
### Daily Tasks
- [ ] learn vocabulary with Anki
- [ ] check calendar
- [ ] check todos
- [ ] meditate
---`;

var n = BearNote.fetch(title);
if (n === false) {
  n = BearNote.create(template, { "title": title });
  if (n === false) context.fail();
}
n.append("\n" + draft.content);