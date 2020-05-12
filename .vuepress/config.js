module.exports = {
  title: "I Am That",
	description: "I Am That — Dialogues of Sri Nisargadatta Maharaj",
	lang: "en",
	evergreen: true,
	plugins: ["@vuepress/back-to-top"],
	head: [
		["script", {src: "https://unpkg.com/@popperjs/core@2"}],
		["script", {src: "https://unpkg.com/tippy.js@6"}]
	],
	themeConfig: {
		search: false,
		smoothScroll: true,
		sidebar: [
			"/",
			{
				title: "1–10",
				children: [
					"/1-the-sense-of-i-am/",
					"/2-obsession-with-the-body/",
					"/3-the-living-present/",
					"/4-real-world-is-beyond-the-mind/",
					"/5-what-is-born-must-die/",
					"/6-meditation/",
					"/7-the-mind/",
					"/8-the-self-stands-beyond-mind/",
					"/9-responses-of-memory/",
					"/10-witnessing/" 
				]
			},
			{
				title: "11–20",
				children: [
					"/11-awareness-and-consciousness/",
					"/12-the-person-is-not-reality/",
					"/13-the-supreme-the-mind-and-the-body/",
					"/14-appearances-and-the-reality/",
					"/15-the-jnani/",
					"/16-desirelessness-the-highest-bliss/",
					"/17-the-ever-present/",
					"/18-to-know-what-you-are-find-out-what-you-are-not/",
					"/19-reality-lies-in-objectivity/",
					"/20-the-supreme-is-beyond-all/"
				]
			},
			{
				title: "21–30",
				children: [
					"/21-who-am-i/",
					"/22-life-is-love-and-love-is-life/",
					"/23-discrimination-leads-to-detachment/",
					"/24-god-is-the-all-doer-the-jnani-a-non-doer/",
					"/25-hold-on-to-i-am/",
					"/26-personality-an-obstacle/",
					"/27-the-beginningless-begins-forever/",
					"/28-all-suffering-is-born-of-desire/",
					"/29-living-is-lifes-only-purpose/",
					"/30-you-are-free-now/"
				]
			},
			{
				title: "31–40",
				children: [
					"/31-do-not-undervalue-attention/",
					"/32-life-is-the-supreme-guru/",
					"/33-to-see-the-unreal-is-wisdom/",
					"/34-mind-is-restlessness-itself/",
					"/35-the-greatest-guru-is-your-inner-self/",
					"/36-killing-hurts-the-killer-not-the-killed/",
					"/37-beyond-pain-and-pleasure-there-is-bliss/",
					"/38-spiritual-practice-is-will-asserted-and-reasserted/",
					"/39-by-itself-nothing-has-existence/",
					"/40-only-the-self-is-real/"
				]
			},
			{
				title: "41–50",
				children: [
					"/41-develop-the-witness-attitude/",
					"/42-reality-cannot-be-expressed/",
					"/43-ignorance-can-be-recognised-not-jnana/",
					"/44-i-am-is-true-all-else-is-inference/",
					"/45-what-comes-and-goes-has-no-being/",
					"/46-awareness-of-being-is-bliss/",
					"/47-watch-your-mind/",
					"/48-awareness-is-free/",
					"/49-mind-causes-insecurity/",
					"/50-self-awareness-is-the-witness/"
				]
			},
			{
				title: "51–60",
				children: [
					"/51-be-indifferent-to-pain-and-pleasure/",
					"/52-being-happy-making-happy-is-the-rhythm-of-life/",
					"/53-desires-fulfilled-breed-more-desires/",
					"/54-body-and-mind-are-symptoms-of-ignorance/",
					"/55-give-up-all-and-you-gain-all/",
					"/56-consciousness-arising-world-arises/",
					"/57-beyond-mind-there-is-no-suffering/",
					"/58-perfection-destiny-of-all/",
					"/59-desire-and-fear-self-centred-states/",
					"/60-live-facts-not-fancies/"
				]
			},
			{
				title: "61–70",
				children: [
					"/61-matter-is-consciousness-itself/",
					"/62-in-the-supreme-the-witness-appears/",
					"/63-the-notion-of-doership-is-bondage/",
					"/64-whatever-pleases-you-keeps-you-back/",
					"/65-a-quiet-mind-is-all-you-need/",
					"/66-all-search-for-happiness-is-misery/",
					"/67-experience-is-not-the-real-thing/",
					"/68-seek-the-source-of-consciousness/",
					"/69-transiency-is-proof-of-unreality/",
					"/70-god-is-the-end-of-all-desire-and-knowledge/"
				]
			},
			{
				title: "71–80",
				children: [
					"/71-in-self-awareness-you-learn-about-yourself/",
					"/72-what-is-pure-unalloyed-unattached-is-real/",
					"/73-the-death-of-the-mind-is-the-birth-of-wisdom/",
					"/74-the-truth-is-here-and-now/"
				]
			},
			{
				title: "Front Matter",
				children: [
					"/foreword/",
					"/who-is-nisargadatta-maharaj/",
					"/translators-note/",
					"/editors-note/"
				]
			},
			{
				title: "Back Matter",
				children: [
					"/highlights/",
					"/appendix-1-nisarga-yoga/",
					"/appendix-2-navnath-sampradaya/",
					"/glossary/"
				]
			}
		]
	}
}
