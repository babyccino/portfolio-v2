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
  cover_image: string | null
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
  cover_image: string | null
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
