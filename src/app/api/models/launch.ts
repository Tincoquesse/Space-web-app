export interface Launch {

  "flight_number": number,
  "mission_name": string,
  "mission_id": [],
  "launch_year": string,
  "launch_date_unix": number,
  "launch_date_utc": string,
  "launch_date_local": string,
  "is_tentative": boolean,
  "tentative_max_precision": string,
  "tbd": boolean,
  "launch_window": null,
  "rocket": {
    "rocket_id": string,
    "rocket_name": string,
    "rocket_type": string,
    "first_stage": {
      "cores": []
    },
    "second_stage": {
      "block": number,
      "payloads": []
    },
    "fairings": {
      "reused": boolean,
      "recovery_attempt": boolean,
      "recovered": boolean,
      "ship": undefined
    }
  },
  "ships": [],
  "telemetry": {
    "flight_club": undefined
  },
  "launch_site": {
    "site_id": string,
    "site_name": string,
    "site_name_long": string
  },
  "launch_success": boolean,
  "links": {
    "mission_patch": string,
    "mission_patch_small": string,
    "reddit_campaign": string,
    "reddit_launch": string,
    "reddit_recovery": string,
    "reddit_media": string,
    "presskit": string,
    "article_link": string,
    "wikipedia": string,
    "video_link": string,
    "youtube_id": string,
    "flickr_images": []
  },
  "details": string,
  "upcoming": boolean,
  "static_fire_date_utc": string,
  "static_fire_date_unix": string,
  "timeline": string


}
