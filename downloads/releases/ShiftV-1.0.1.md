# ShiftV 1.0.1

Bug-fix update for automatic text transforms and URL cleanup.

- Active transform recipes now write the processed text back to the pasteboard, so immediate paste uses the converted clip instead of the original clipboard text.
- Clean URL now removes Google Ads query parameters such as `gad_source`, `gad_campaignid`, `gbraid`, and `gclid`.
