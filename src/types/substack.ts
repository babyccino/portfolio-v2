export type ArchivePost = {
  id: number
  editor_v2: boolean
  publication_id: number
  title: string
  social_title: string | null
  search_engine_title: string | null
  search_engine_description: string | null
  type: string
  slug: string
  post_date: string
  audience: string
  podcast_duration: number | null
  video_upload_id: number | null
  podcast_upload_id: number | null
  write_comment_permissions: string
  should_send_free_preview: boolean
  free_unlock_required: boolean
  default_comment_sort: string
  canonical_url: string
  section_id: number | null
  top_exclusions: []
  pins: []
  is_section_pinned: boolean
  section_slug: string | null
  section_name: string | null
  reactions: Record<string, number>
  restacked_post_id: string | null
  restacked_pub_name: string | null
  restacked_pub_logo_url: string | null
  subtitle: string
  cover_image: string
  cover_image_is_square: boolean
  cover_image_is_explicit: boolean
  podcast_url: string | null
  videoUpload: string | null
  podcastFields: string | null
  podcast_preview_upload_id: number | null
  podcastUpload: string | null
  podcastPreviewUpload: string | null
  voiceover_upload_id: number | null
  voiceoverUpload: string | null
  has_voiceover: boolean
  description: string
  body_json: object | null
  body_html: string | null
  longer_truncated_body_json: object | null
  longer_truncated_body_html: string | null
  truncated_body_text: string
  wordcount: number
  postTags: {
    id: string
    publication_id: number
    name: string
    slug: string
    hidden: boolean
  }[]
  publishedBylines: {
    id: number
    name: string
    handle: null
    previous_name: string | null
    photo_url: string
    bio: string | null
    profile_set_up_at: string
    publicationUsers: string[]
    is_guest: boolean
    bestseller_tier: string | null
  }[]
  reaction: boolean
  reaction_count: number
  comment_count: number
  child_comment_count: number
  audio_items: {
    post_id: number
    voice_id: string
    audio_url: string | null
    type: string
    status: string
  }[]
  hidden: boolean
  hasCashtag: boolean
  is_saved: boolean
  saved_at: string | null
  is_viewed: boolean
  restacked: boolean
}

export type PostsPost = {
  id: number
  editor_v2: boolean
  publication_id: number
  type: string
  title: string
  social_title: string | null
  section_id: number | null
  search_engine_title: string | null
  search_engine_description: string | null
  subtitle: string
  slug: string
  post_date: string
  podcast_url: string | null
  podcast_art_url: string | null
  podcast_duration: number | null
  video_upload_id: number | null
  podcast_upload_id: number | null
  podcast_preview_upload_id: number | null
  audience: string
  should_send_free_preview: boolean
  write_comment_permissions: string
  show_guest_bios: boolean
  free_unlock_required: boolean
  default_comment_sort: string
  canonical_url: string
  audience_before_archived: string | null
  exempt_from_archive_paywall: boolean
  restacks: number
  reactions: Record<string, number>
  top_exclusions: []
  pins: []
  section_pins: []
  previous_post_slug: string
  next_post_slug: string | null
  cover_image: string
  cover_image_is_square: boolean
  cover_image_is_explicit: boolean
  videoUpload: string | null
  podcastFields: string | null
  podcastUpload: string | null
  podcastPreviewUpload: null
  voiceover_upload_id: number | null
  voiceoverUpload: string | null
  has_voiceover: boolean
  description: string
  body_html: string
  longer_truncated_body_json: null
  longer_truncated_body_html: null
  truncated_body_text: string
  wordcount: number
  postTags: {
    id: string
    publication_id: number
    name: string
    slug: string
    hidden: boolean
  }[]
  publishedBylines: {
    id: number
    name: string
    handle: string | null
    previous_name: string | null
    photo_url: string
    bio: string | null
    profile_set_up_at: string
    publicationUsers: string[]
    is_guest: boolean
    bestseller_tier: string | null
  }[]
  reaction: boolean
  reaction_count: number
  comment_count: number
  child_comment_count: number
  audio_items: {
    post_id: number
    voice_id: string
    audio_url: string | null
    type: string
    status: string
  }[]
  hidden: boolean
  hasCashtag: boolean
  is_saved: boolean
  saved_at: string | null
  is_viewed: boolean
  restacked: boolean
  themeVariables: {
    color_theme_bg_pop: string
    background_pop: string
    color_theme_bg_web: string
    cover_bg_color: string
    background_pop_darken: string
    print_on_pop: string
    color_theme_bg_pop_darken: string
    color_theme_print_on_pop: string
    border_subtle: string
    background_subtle: string
    print_pop: string
    color_theme_accent: string
    cover_print_primary: string
    cover_print_secondary: string
    cover_border_color: string
    home_hero: string
    home_posts: string
    web_bg_color: string
    background_contrast_1: string
    color_theme_bg_contrast_1: string
    background_contrast_2: string
    color_theme_bg_contrast_2: string
    background_contrast_3: string
    color_theme_bg_contrast_3: string
    background_contrast_4: string
    color_theme_bg_contrast_4: string
    background_contrast_5: string
    color_theme_bg_contrast_5: string
    background_contrast_pop: string
    color_theme_bg_contrast_pop: string
    input_background: string
    cover_input_background: string
    tooltip_background: string
    web_bg_color_h: string
    web_bg_color_s: string
    web_bg_color_l: string
    print_on_web_bg_color: string
    print_secondary_on_web_bg_color: string
    selected_comment_background_color: string
    background_pop_rgb: string
    color_theme_bg_pop_rgb: string
    color_theme_accent_rgb: string
  } | null
  comments: string[]
}

const a = {
  id: 138198930,
  editor_v2: false,
  publication_id: 1025561,
  type: "newsletter",
  title: "Avoid using Type Assertions in TypeScript",
  social_title: null,
  section_id: null,
  search_engine_title: null,
  search_engine_description: null,
  subtitle:
    "In this issue, I will explain why you should avoid using Type Assertions in Typescript and techniques you can use to avoid them.",
  slug: "avoid-using-type-assertions-in-typescript",
  post_date: "2023-10-23T06:58:15.432Z",
  podcast_url: "",
  podcast_art_url: null,
  podcast_duration: null,
  video_upload_id: null,
  podcast_upload_id: null,
  podcast_preview_upload_id: null,
  audience: "everyone",
  should_send_free_preview: false,
  write_comment_permissions: "everyone",
  show_guest_bios: true,
  free_unlock_required: false,
  default_comment_sort: null,
  canonical_url: "https://www.allthingstypescript.dev/p/avoid-using-type-assertions-in-typescript",
  audience_before_archived: null,
  exempt_from_archive_paywall: false,
  restacks: 1,
  reactions: { "❤": 4 },
  top_exclusions: [],
  pins: [],
  section_pins: [],
  previous_post_slug: "always-prefer-type-with-a-narrower",
  next_post_slug: "why-avoid-the-any-type-in-typescript",
  cover_image:
    "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg",
  cover_image_is_square: false,
  cover_image_is_explicit: false,
  videoUpload: null,
  podcastFields: null,
  podcastUpload: null,
  podcastPreviewUpload: null,
  voiceover_upload_id: null,
  voiceoverUpload: null,
  has_voiceover: false,
  description:
    "In this issue, I will explain why you should avoid using Type Assertions in Typescript and techniques you can use to avoid them.",
  body_html:
    '<div class="captioned-image-container"><figure><a class="image-link is-viewable-img image2" target="_blank" href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg" data-component-name="Image2ToDOM"><div class="image2-inset"><picture><source type="image/webp" srcset="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 1456w" sizes="100vw"><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg" width="888" height="499" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:499,&quot;width&quot;:888,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:139626,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:false,&quot;topImage&quot;:true,&quot;internalRedirect&quot;:null}" class="sizing-normal" alt="" srcset="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c1a6c85-8ccc-46d1-b380-9cdd2caf3007_888x499.jpeg 1456w" sizes="100vw" fetchpriority="high"></picture><div class="image-link-expand"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2 "><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg></div></div></a></figure></div><p>We have all been there, and we have come across the following error:</p><div class="captioned-image-container"><figure><a class="image-link image2" target="_blank" href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png" data-component-name="Image2ToDOM"><div class="image2-inset"><picture><source type="image/webp" srcset="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 1456w" sizes="100vw"><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png" width="905" height="172" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/c24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:172,&quot;width&quot;:905,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:28309,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/png&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:false,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null}" class="sizing-normal" alt="" srcset="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc24e7ba5-356b-4bb4-a7de-4faf8431c9ae_905x172.png 1456w" sizes="100vw"></picture><div></div></div></a></figure></div><p>And we have been inclined to solve the above issue by asserting the type.</p><pre><code>example(y as string)</code></pre><p>So, why am I discouraging you to avoid doing this? Let me answer that question in this issue of All Things Typescript.</p><p class="button-wrapper" data-attrs="{&quot;url&quot;:&quot;https://www.allthingstypescript.dev/subscribe?&quot;,&quot;text&quot;:&quot;Subscribe now&quot;,&quot;action&quot;:null,&quot;class&quot;:null}" data-component-name="ButtonCreateButton"><a class="button primary" href="https://www.allthingstypescript.dev/subscribe?"><span>Subscribe now</span></a></p><h3>But first, what are Type Assertions?</h3><p>Types assertion is a way of telling Typescript what the type of a variable is. This can be done either of two ways: using the <code>as</code> syntax or the angle bracket <code>&lt;Type&gt;</code> syntax, as shown below:</p><pre><code><code>type Person = {\n    firstname: string;\n    lastname: string;\n}\n\n// using as syntax\nconst x : unknown = {};\n\n// asserting it as Person using as syntax\nconst firstname = (x as Person).firstname;\n\n// asserting it as Person using the angle brackets\nconst firstname = (&lt;Person&gt;x).firstname;\n</code></code></pre><p>Type assertion allows us as developers to provide more information to Typescript about a variable type. This is a good way to go when we have more information about a variable Type than Typescript is able to infer based on the limited information available to it. For instance, dom elements:</p><pre><code>const button = document.getElementById("btn");</code></pre><p>The type of button above is HTMLElement, which is generic. But we know that the type should be <code>HTMLButtonElement</code> and we can use assertions to provide more information to Typescript, as shown below:</p><pre><code>const button = document.getElementById("btn") as HTMLButtonElement | null;</code></pre><p>As you can imagine, this is a very powerful feature and can come in handy as shown above. But with power comes great responsibility and I believe that assertion should be used sparingly and not the default option.</p><p>When we use type assertion we are basically telling the Typescript compiler that we know what the type is and it should trust us, i.e. we know what we are doing. The problem with this is that we prevent Typescript from helping us where it should and take on that responsibility ourselves. </p><p>In the above example, Typescript does not type-check whether the variable <code>x</code> has the property <code>firstname</code> we are accessing because we are asserting the type, which will definitely introduce a bug into our system.</p><p>Typescript does provide some safeguards and will warn you when you try to perform an unsafe type assertion, as shown below:</p><pre><code>function example(x: string) {\n    // do something \n}\n\nlet y: number | undefined;\n\nexample(y as string)</code></pre><p>In the case above, Typescript will warn you against performing a type assertion that’s not structurally sound.</p><pre><code>Conversion of type \'number | undefined\' to type \'string\' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to \'unknown\' first.\n\nType \'number\' is not comparable to type \'string\'.(2352)</code></pre><p>Of course, if you are still determined, you can still override Typescript by first asserting it as unknown and then to string, as shown below:</p><pre><code>example(y as unknown as string)</code></pre><p>One other thing to keep in mind is that if you are asserting to any, you will completely disable type-checking for that variable usage. This is because the <code>any</code> type is assignable to any variable and can be assigned to the <code>any</code> variable. This means any is dangerous as it can be contagious, due to its ability to be assigned to any variable and vice versa.</p><h3><strong>What about Non-null Assertions?</strong></h3><p>Another common type of assertion is a non-null assertion. In this assertion, we use the <code>!</code> operator after variable to tell the Typescript compiler that a variable isn\'t null.</p><pre><code><code>function square(x: number) {\n\treturn x * x;\n}\n\nconst x : number | undefined;\n\nconst answer = square(x!);</code></code></pre><p>This assertion should be used sparingly, especially if the null suggestion is coming from external API typing like environment variables, which are always typed as <code>string | undefined</code>. I have come across not-so-obvious bugs that were thrown in a completely different section of the code with a different error message because I allowed an undefined variable to be passed on. This happened because instead of handling the possibility of the environment variable being undefined, I decided that non-null assertion was the way to go.</p><h2><strong>So, what are the Alternatives?</strong></h2><h3><strong>Narrowing of Types</strong></h3><p>Type narrowing is the process of moving a less precise type to a more precise type. For instance, taking a variable of type <code>any</code> and moving it to string. There are various ways of achieving this, which I have covered previously <a href="https://www.allthingstypescript.dev/p/narrowing-types-in-typescript">here</a>, but I will take a look at a few notable ones.</p><p><strong>Type Guards:</strong> You can use Type Guards to narrow the types of a <code>union</code>, <code>unknown</code>, <code>any</code>, etc. to a specific type:</p><pre><code><code>function doSomething(x: string | number) {\n    if(typeof x === "string") {\n    \t// do somethign with the string\n    } else {\n    \t// do something with the number\n    }\n}</code></code></pre><p><strong>Truthiness Narrowing: </strong>You can check if a variable is truthy i.e. not undefined or null before using it:</p><pre><code><code>function doSomething(x?: string) {\n\tif(x) {\n\t\t// type of x is now string\n\t}\n}</code></code></pre><p><strong>Building Custom Type Guards: </strong>Finally, you can create type guards that do an exhaustive type checking on an object before asserting its type:</p><pre><code><code>function isRectangle(shape: unknown): shape is Rectangle {\n  if ("width" in shape &amp;&amp; "height" in shape) {\n  \t// this is a rectangle\n  \treturn true; \n  }\n  // it\'s not a rectangle\n  return false;\n}</code></code></pre><h3><strong>Providing Default/Fallback Values</strong></h3><p>This mostly works with null and undefined values, but instead of asserting to a string to remove the possibility of it being undefined, you can provide a default value that automatically becomes a string. You can achieve this by using either null coalescing operator (<code>??</code>) or the or ( <code>||</code>) operator.</p><pre><code><code>// using the nullish coalescing operator\nconst API_URL = process.ENV.API_URL ?? "DEFAULT URL";\n\n// using the OR (||) logical operator\nconst API_URL = process.ENV.API_URL || "DEFAULT URL";\n\n</code></code></pre><p>We can also use Javascript Logical Assignment Operator to provide a default value:</p><pre><code><code>let x : string | number;\n\n// provide a default value if null or undefined\nx ??= "Hello World"\n\n// provide a default value if falsy\nx ||= "Hello World"</code></code></pre><h2><strong>Conclusion</strong></h2><p>In today’s issue, we learned that by using type assertions, we are limiting the ability of the Typescript compiler to do Type checking for us. This can lead to us having bugs in our system which Typescript was meant to prevent. To avoid using assertions, we covered a few techniques we can use such as Type narrowing and providing fallback values in the case of possibly undefined/null values.</p><p class="button-wrapper" data-attrs="{&quot;url&quot;:&quot;https://www.allthingstypescript.dev/p/avoid-using-type-assertions-in-typescript?utm_source=substack&utm_medium=email&utm_content=share&action=share&token=eyJ1c2VyX2lkIjoxNDkzNDAyNiwicG9zdF9pZCI6MTM4MTk4OTMwLCJpYXQiOjE3MDQxODM3NzksImV4cCI6MTcwNjc3NTc3OSwiaXNzIjoicHViLTEwMjU1NjEiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ztjE5QFrSwcNOBZcaCRPo0EE5m9okw6GhHzEytZM2Xg&quot;,&quot;text&quot;:&quot;Share&quot;,&quot;action&quot;:null,&quot;class&quot;:null}" data-component-name="ButtonCreateButton"><a class="button primary" href="https://www.allthingstypescript.dev/p/avoid-using-type-assertions-in-typescript?utm_source=substack&utm_medium=email&utm_content=share&action=share&token=eyJ1c2VyX2lkIjoxNDkzNDAyNiwicG9zdF9pZCI6MTM4MTk4OTMwLCJpYXQiOjE3MDQxODM3NzksImV4cCI6MTcwNjc3NTc3OSwiaXNzIjoicHViLTEwMjU1NjEiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ztjE5QFrSwcNOBZcaCRPo0EE5m9okw6GhHzEytZM2Xg"><span>Share</span></a></p><p>That’s it for this week, and here are a few more issues you might interested in:</p><div class="digest-post-embed" data-attrs="{&quot;nodeId&quot;:&quot;0c892715-523a-4ad9-91fb-8b6a5fd602c4&quot;,&quot;caption&quot;:&quot;In this issue, we will be looking as to why you should prefer types with a more narrow scope in Typescript as compared to the standard types (strings, numbers, etc), that you get out of the box.&quot;,&quot;size&quot;:&quot;sm&quot;,&quot;isEditorNode&quot;:true,&quot;title&quot;:&quot;Always Prefer Type with a Narrower Scope in Typescript&quot;,&quot;publishedBylines&quot;:[{&quot;id&quot;:43214086,&quot;name&quot;:&quot;Maina Wycliffe&quot;,&quot;bio&quot;:&quot;Software Engineer, Google Developer Expert and Typescript Nerd.&quot;,&quot;photo_url&quot;:&quot;https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8765c349-75ba-43ee-9976-e3ae5631b064_904x1124.jpeg&quot;,&quot;is_guest&quot;:false,&quot;bestseller_tier&quot;:null}],&quot;post_date&quot;:&quot;2023-07-18T19:40:40.734Z&quot;,&quot;cover_image&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/583126b7-442b-400c-baa0-29d5197ea349_1280x958.jpeg&quot;,&quot;cover_image_alt&quot;:null,&quot;canonical_url&quot;:&quot;https://www.allthingstypescript.dev/p/always-prefer-type-with-a-narrower&quot;,&quot;section_name&quot;:null,&quot;id&quot;:129186941,&quot;type&quot;:&quot;newsletter&quot;,&quot;reaction_count&quot;:4,&quot;comment_count&quot;:0,&quot;publication_name&quot;:&quot;All Things Typescript&quot;,&quot;publication_logo_url&quot;:&quot;https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7922083f-3e29-485a-ab34-3b07ac80034c_1084x1084.png&quot;,&quot;belowTheFold&quot;:true}"></div><div class="digest-post-embed" data-attrs="{&quot;nodeId&quot;:&quot;f44a2500-d4b4-4f98-b30b-c0d926411a23&quot;,&quot;caption&quot;:&quot;Have you come across the never type before? If not, let me tell you more about this in this issue of All Things Typescript. In this issue, I want to explore situations in which a variable can have the never Type. But before we do that, what’s the never Type? To understand this, let’s explore Types first. Types, in Typescript and in language for that matt…&quot;,&quot;size&quot;:&quot;sm&quot;,&quot;isEditorNode&quot;:true,&quot;title&quot;:&quot;When is a variables\' Type Never?&quot;,&quot;publishedBylines&quot;:[{&quot;id&quot;:43214086,&quot;name&quot;:&quot;Maina Wycliffe&quot;,&quot;bio&quot;:&quot;Software Engineer, Google Developer Expert and Typescript Nerd.&quot;,&quot;photo_url&quot;:&quot;https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8765c349-75ba-43ee-9976-e3ae5631b064_904x1124.jpeg&quot;,&quot;is_guest&quot;:false,&quot;bestseller_tier&quot;:null}],&quot;post_date&quot;:&quot;2023-06-19T06:21:59.257Z&quot;,&quot;cover_image&quot;:&quot;https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F037db254-400d-4e38-b40f-bfb8d6df9496_2000x1500.jpeg&quot;,&quot;cover_image_alt&quot;:null,&quot;canonical_url&quot;:&quot;https://www.allthingstypescript.dev/p/when-is-a-variables-type-never&quot;,&quot;section_name&quot;:null,&quot;id&quot;:126204619,&quot;type&quot;:&quot;newsletter&quot;,&quot;reaction_count&quot;:2,&quot;comment_count&quot;:0,&quot;publication_name&quot;:&quot;All Things Typescript&quot;,&quot;publication_logo_url&quot;:&quot;https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7922083f-3e29-485a-ab34-3b07ac80034c_1084x1084.png&quot;,&quot;belowTheFold&quot;:true}"></div><div class="digest-post-embed" data-attrs="{&quot;nodeId&quot;:&quot;91cd8c0d-dacb-4c05-be32-096087001993&quot;,&quot;caption&quot;:&quot;Typescript has a great inference system, which will infer Types for variables when the variable doesn’t have an explicit type annotation. The process in which Typescript will determine the type of a variable is called Type Widening, which I have covered previously&quot;,&quot;size&quot;:&quot;sm&quot;,&quot;isEditorNode&quot;:true,&quot;title&quot;:&quot;The typeof and keyof operators - referencing variable types in Typescript&quot;,&quot;publishedBylines&quot;:[{&quot;id&quot;:43214086,&quot;name&quot;:&quot;Maina Wycliffe&quot;,&quot;bio&quot;:&quot;Software Engineer, Google Developer Expert and Typescript Nerd.&quot;,&quot;photo_url&quot;:&quot;https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8765c349-75ba-43ee-9976-e3ae5631b064_904x1124.jpeg&quot;,&quot;is_guest&quot;:false,&quot;bestseller_tier&quot;:null}],&quot;post_date&quot;:&quot;2023-03-27T07:00:53.761Z&quot;,&quot;cover_image&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/3e1ccdbf-a48d-4635-9dfc-f1154290efee_2433x1826.png&quot;,&quot;cover_image_alt&quot;:null,&quot;canonical_url&quot;:&quot;https://www.allthingstypescript.dev/p/the-typeof-and-keyof-operators-referencing&quot;,&quot;section_name&quot;:null,&quot;id&quot;:99591856,&quot;type&quot;:&quot;newsletter&quot;,&quot;reaction_count&quot;:5,&quot;comment_count&quot;:0,&quot;publication_name&quot;:&quot;All Things Typescript&quot;,&quot;publication_logo_url&quot;:&quot;https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7922083f-3e29-485a-ab34-3b07ac80034c_1084x1084.png&quot;,&quot;belowTheFold&quot;:true}"></div><div class="digest-post-embed" data-attrs="{&quot;nodeId&quot;:&quot;76c30ede-dffe-4c51-9fd2-2fdf645d93b1&quot;,&quot;caption&quot;:&quot;Hey, Wycliffe here, and welcome to this week’s mid-week scoop. At the beginning of every week, I usually send out an article covering various Techniques and Lessons in Typescript to help you learn and build more Type safe code in Typescript, such as&quot;,&quot;size&quot;:&quot;sm&quot;,&quot;isEditorNode&quot;:true,&quot;title&quot;:&quot;Narrowing Types in Typescript&quot;,&quot;publishedBylines&quot;:[{&quot;id&quot;:43214086,&quot;name&quot;:&quot;Maina Wycliffe&quot;,&quot;bio&quot;:&quot;Software Engineer, Google Developer Expert and Typescript Nerd.&quot;,&quot;photo_url&quot;:&quot;https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8765c349-75ba-43ee-9976-e3ae5631b064_904x1124.jpeg&quot;,&quot;is_guest&quot;:false,&quot;bestseller_tier&quot;:null}],&quot;post_date&quot;:&quot;2023-01-17T04:42:54.650Z&quot;,&quot;cover_image&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/a63afa41-ae6d-4d26-9d7d-4703aa0a2125_1280x720.jpeg&quot;,&quot;cover_image_alt&quot;:null,&quot;canonical_url&quot;:&quot;https://www.allthingstypescript.dev/p/narrowing-types-in-typescript&quot;,&quot;section_name&quot;:null,&quot;id&quot;:95731310,&quot;type&quot;:&quot;newsletter&quot;,&quot;reaction_count&quot;:1,&quot;comment_count&quot;:0,&quot;publication_name&quot;:&quot;All Things Typescript&quot;,&quot;publication_logo_url&quot;:&quot;https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7922083f-3e29-485a-ab34-3b07ac80034c_1084x1084.png&quot;,&quot;belowTheFold&quot;:true}"></div><p></p><p class="button-wrapper" data-attrs="{&quot;url&quot;:&quot;https://www.allthingstypescript.dev/p/avoid-using-type-assertions-in-typescript/comments&quot;,&quot;text&quot;:&quot;Leave a comment&quot;,&quot;action&quot;:null,&quot;class&quot;:null}" data-component-name="ButtonCreateButton"><a class="button primary" href="https://www.allthingstypescript.dev/p/avoid-using-type-assertions-in-typescript/comments"><span>Leave a comment</span></a></p><div class="community-chat" data-attrs="{&quot;url&quot;:&quot;https://open.substack.com/pub/allthingstypescript/chat?utm_source=chat_embed&quot;,&quot;subdomain&quot;:&quot;allthingstypescript&quot;,&quot;pub&quot;:{&quot;id&quot;:1025561,&quot;name&quot;:&quot;All Things Typescript&quot;,&quot;author_name&quot;:&quot;Maina Wycliffe&quot;,&quot;author_photo_url&quot;:&quot;https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8765c349-75ba-43ee-9976-e3ae5631b064_904x1124.jpeg&quot;}}" data-component-name="CommunityChatRenderPlaceholder"></div>',
  longer_truncated_body_json: null,
  longer_truncated_body_html: null,
  truncated_body_text: "We have all been there, and we have come across the following error:",
  wordcount: 1091,
  postTags: [
    {
      id: "84b808a6-2893-447c-b2ba-42ce762ba917",
      publication_id: 1025561,
      name: "Javascript",
      slug: "javascript",
      hidden: false,
    },
    {
      id: "8d9123f0-6c26-41a1-ae4a-9fb7f792acf5",
      publication_id: 1025561,
      name: "Vue",
      slug: "vue",
      hidden: false,
    },
    {
      id: "94486912-2bbf-48d5-a131-0e431005a3f9",
      publication_id: 1025561,
      name: "React",
      slug: "react",
      hidden: false,
    },
    {
      id: "b4a157db-9da9-4d31-aa5e-18137a15d157",
      publication_id: 1025561,
      name: "Typescript",
      slug: "typescript",
      hidden: false,
    },
    {
      id: "fcb7009c-57b3-4481-bb33-403b5c6bf7b4",
      publication_id: 1025561,
      name: "Angular",
      slug: "angular",
      hidden: false,
    },
  ],
  publishedBylines: [
    {
      id: 43214086,
      name: "Maina Wycliffe",
      handle: "allthingstypescript",
      previous_name: null,
      photo_url:
        "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8765c349-75ba-43ee-9976-e3ae5631b064_904x1124.jpeg",
      bio: "Software Engineer, Google Developer Expert and Typescript Nerd.",
      profile_set_up_at: "2021-09-26T20:19:24.202Z",
      publicationUsers: [
        {
          id: 971866,
          user_id: 43214086,
          publication_id: 1025561,
          role: "admin",
          public: true,
          is_primary: false,
          publication: {
            id: 1025561,
            name: "All Things Typescript",
            subdomain: "allthingstypescript",
            custom_domain: "www.allthingstypescript.dev",
            custom_domain_optional: false,
            hero_text:
              "Learn and develop an innate understanding of Typescript and its typing system with weekly lessons and get the most out of Typescript.",
            logo_url:
              "https://substack-post-media.s3.amazonaws.com/public/images/7922083f-3e29-485a-ab34-3b07ac80034c_1084x1084.png",
            author_id: 43214086,
            theme_var_background_pop: "#25BD65",
            created_at: "2022-08-02T18:40:31.194Z",
            rss_website_url: null,
            email_from_name: null,
            copyright: "Maina Wycliffe",
            founding_plan_name: null,
            community_enabled: true,
            invite_only: false,
            payments_state: "disabled",
            language: null,
            explicit: false,
          },
        },
        {
          id: 2007562,
          user_id: 43214086,
          publication_id: 2008446,
          role: "admin",
          public: true,
          is_primary: false,
          publication: {
            id: 2008446,
            name: "Unstacked Labs",
            subdomain: "unstackeddevs",
            custom_domain: "newsletter.unstacked.dev",
            custom_domain_optional: false,
            hero_text: "My personal Substack",
            logo_url:
              "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8765c349-75ba-43ee-9976-e3ae5631b064_904x1124.jpeg",
            author_id: 43214086,
            theme_var_background_pop: "#FD5353",
            created_at: "2023-10-06T08:22:06.252Z",
            rss_website_url: null,
            email_from_name: null,
            copyright: "Maina Wycliffe",
            founding_plan_name: null,
            community_enabled: true,
            invite_only: false,
            payments_state: "disabled",
            language: null,
            explicit: false,
          },
        },
      ],
      twitter_screen_name: "mwycliffe_dev",
      is_guest: false,
      bestseller_tier: null,
    },
  ],
  reaction: false,
  reaction_count: 4,
  comment_count: 0,
  child_comment_count: 0,
  audio_items: [
    {
      post_id: 138198930,
      voice_id: "en-US-JennyNeural",
      audio_url:
        "https://substack-video.s3.amazonaws.com/video_upload/post/138198930/tts/en-US-JennyNeural.mp3",
      type: "tts",
      status: "completed",
    },
  ],
  hasCashtag: false,
  is_saved: false,
  saved_at: null,
  is_viewed: false,
  restacked: false,
  themeVariables: {
    color_theme_bg_pop: "#4D4DFF",
    background_pop: "#4D4DFF",
    color_theme_bg_web: "#e0e0fd",
    cover_bg_color: "#e0e0fd",
    background_pop_darken: "#3333ff",
    print_on_pop: "#ffffff",
    color_theme_bg_pop_darken: "#3333ff",
    color_theme_print_on_pop: "#ffffff",
    border_subtle: "rgba(179, 179, 202, 0.5)",
    background_subtle: "rgba(228, 228, 255, 0.4)",
    print_pop: "#4d4dff",
    color_theme_accent: "#4d4dff",
    cover_print_primary: "#404040",
    cover_print_secondary: "#757575",
    cover_border_color: "#4d4dff",
    home_hero: "newspaper",
    home_posts: "list",
    web_bg_color: "#e0e0fd",
    background_contrast_1: "#d9d9f5",
    color_theme_bg_contrast_1: "#d9d9f5",
    background_contrast_2: "#cecee9",
    color_theme_bg_contrast_2: "#cecee9",
    background_contrast_3: "#bcbcd4",
    color_theme_bg_contrast_3: "#bcbcd4",
    background_contrast_4: "#a2a2b6",
    color_theme_bg_contrast_4: "#a2a2b6",
    background_contrast_5: "#888899",
    color_theme_bg_contrast_5: "#888899",
    background_contrast_pop: "rgba(77, 77, 255, 0.4)",
    color_theme_bg_contrast_pop: "rgba(77, 77, 255, 0.4)",
    input_background: "#e2e2fd",
    cover_input_background: "#e2e2fd",
    tooltip_background: "#161619",
    web_bg_color_h: "240",
    web_bg_color_s: "87.87878787878792%",
    web_bg_color_l: "93.52941176470588%",
    print_on_web_bg_color: "hsl(240, 21.969696969696972%, 31.94117647058824%)",
    print_secondary_on_web_bg_color: "#80808c",
    selected_comment_background_color: "#e0dcf2",
    background_pop_rgb: "77, 77, 255",
    color_theme_bg_pop_rgb: "77, 77, 255",
    color_theme_accent_rgb: "77, 77, 255",
  },
  comments: [],
}
