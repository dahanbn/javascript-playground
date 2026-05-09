let d = new Date()

// draft.setTemplateTag('daily-long-title', dailyLongTitle);

let title = strftime(d, `%Y-%m-%d Food log for %A`)
let LongTitle = strftime(d, `%A, %d.%m.%Y (week %V & day: %j)`)
let tagYear = strftime(d, `%Y`)
let tagMonth = strftime(d, `%Y %m`)

var template = `#food log# #food log/${tagYear}# #food log/${tagYear}/${tagMonth}# 

---
*${LongTitle}*
---
### Daily Tasks
- [ ] learn vocabulary with Anki
- [ ] check calendar
- [ ] check todos
---`;

var n = BearNote.fetch(title);
if (n === false) {
  n = BearNote.create(template, { "title": title });
  if (n === false) context.fail();
}
n.append("\n" + draft.content);
