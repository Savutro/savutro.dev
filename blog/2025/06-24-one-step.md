---
slug: post-0001
title: The Beauty in the Ugly
authors: [savutro]
tags: [funny, tech, tutorial]
---

Today I'll be featuring a story about beautifully ugly code.

<!-- truncate -->

It all started on a rainy Wednesday—the kind of day where the coffee’s cold, your tabs have tabs, and you find yourself questioning why `null == undefined` is true but `null === undefined` is false.

I had a simple goal: make a button that, when clicked, fetches a dad joke from an API and displays it on the screen.

**Simple.**

But, like all great tragedies, it began with good intentions and ended in a monument to unholy architecture.

---

### **The Code**

Let me show you what I *eventually* shipped to production:

```javascript
document.getElementById("jokeBtn").addEventListener("click", async function () {
  let x = (await (await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })).json()).joke || (["Why", "did", "the", "function", "break?"].join(" ") + " Because it had too many arguments.");

  document.querySelector("#display").innerHTML = x.split("").map((c, i) => i % 2 ? c.toUpperCase() : c.toLowerCase()).join("");
});
```

Yes. That is one single function, bound to one single button, with one single purpose… that does **way too much**.

Let’s walk through what makes this code beautifully ugly:

---

### **1. Nested `await` like a Matryoshka Doll**

I didn’t just `fetch` and then `json()` like a normal person. I went for:

```javascript
await (await fetch(...)).json()
```

Because nothing screams "this will age well" like asynchronous nesting that makes your future self say, “Who hurt me?”

---

### **2. Fallback Joke… from Pure String Violence**

In case the API failed, I provided a backup joke:

```javascript
["Why", "did", "the", "function", "break?"].join(" ") + " Because it had too many arguments."
```

Because, why use a string literal when you can construct it like a deranged poet?

---

### **3. Alternating Character Casing — Because Meme Formatting Is Forever**

Just to make things ✨fancy✨, I uppercased every second letter, turning a dad joke into a Spongebob meme:

```javascript
x.split("").map((c, i) => i % 2 ? c.toUpperCase() : c.toLowerCase()).join("")
```

Because legibility is for the weak.

---

### **4. Absolutely No Variables with Meaningful Names**

You thought I’d name my variables something descriptive? Ha. I used `x`.

Because `x` is a mystery. Like life. Or why this button makes the entire browser freeze when the API is slow.

---

### **5. No Separation of Concerns. Not Even a Little.**

No functions. No modularity. No comments. Just raw, chaotic power in one anonymous event handler. It’s like a Jackson Pollock painting, but for developers.

---

### **The Aftermath**

When my teammate reviewed the PR, he left just one comment:

> “I don’t know whether to merge this or frame it.”

I replied with a gif of Nicolas Cage clapping.

We merged it.

It’s still in production.

Sometimes, when I look at it, I feel pride.  
Sometimes, I weep.
