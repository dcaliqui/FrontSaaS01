# Mini Presentation with JSON Messages (i18n-style)

This project is a tiny learning guide that shows how to build a locale-based presentation page using JSON message files and a URL language switcher.

## 1) Run the app

```bash
npm run dev
```

Open http://localhost:3000 and you will be redirected to `/en`.

## 2) Project structure

```
src/
	app/
		page.tsx                 # Redirects to /en
		[lang]/
			page.tsx               # Presentation page for each locale
		components/
			LocaleSwitcher.tsx     # Switches URL locale segment
	messages/
		en.json                  # English copy
		pt.json                  # Portuguese copy
		fr.json                  # French copy
```

## 3) How the locale routing works

1. The root page (`/`) redirects to the default locale `/en`.
2. The route `/[lang]` renders the same page for each locale.
3. If the locale is unknown, the page returns 404.
4. `generateStaticParams()` prebuilds `/en`, `/pt`, and `/fr`.

## 4) How messages are loaded

Each language lives in a JSON file inside `src/messages`.

Example (`src/messages/en.json`):

```json
{
	"tagline": "Mini presentation",
	"title": "Hello, I am a small presentation page.",
	"intro": "This is a short intro with a few simple sentences.",
	"sentences": [
		"The sky is clear today.",
		"I like warm tea in the morning.",
		"This page is simple and calm.",
		"Small steps make real progress.",
		"Learning happens one line at a time."
	],
	"footer": "Switch the language to see the same presentation text."
}
```

The page imports each JSON file and selects the right one based on the URL language.

## 5) How the switcher works

`LocaleSwitcher.tsx` reads the current URL, replaces the first segment (`/en`, `/pt`, `/fr`), and navigates to the new locale. The content updates because the route changes.

## 6) Add a new language

1. Create a new JSON file in `src/messages`, for example `es.json`.
2. Add the new locale to the locale list in:
	 - `src/app/[lang]/page.tsx`
	 - `src/app/components/LocaleSwitcher.tsx`
3. Restart the dev server if needed.

## 7) Update the copy

Edit the JSON files in `src/messages`. Refresh the page to see the changes.

## 8) Useful commands

```bash
npm run dev
npm run build
npm run start
```
