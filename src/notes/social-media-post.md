## Input Node Color Space Transform

Sony ZV-E1 video
<Group name="CameraUnitMetadataSet">
<Item name="CaptureGammaEquation" value="s-log3"/>
<Item name="CaptureColorPrimaries" value="s-gamut3"/>
<Item name="CodingEquations" value="rec709"/>
</Group>

Input Color Space: Sony S-Gamut3
Input Gamma: Sony S-Log3
Output Color Space: DaVinci Wide Gamut
Output Gamma: DaVinci Intermediate

iPhone BlackMagic Cam
Codec Apple ProRes 422
Color Space Apple Log 2 - HDR

Input Color Space: Rec.2020
Input Gamma: Apple Log
Output Color Space: DaVinci Wide Gamut
Output Gamma: DaVinci Intermediate

## Output Node Color Space Transform

Input Color Space: DaVinci Wide Gamut
Input Gamma: DaVinci Intermediate
Output Color Space: Rec.709
Output Gamma: Gamma 2.4

Node Tree

1. Input Color Space
2. White Balance (Primaries Color Bar)
3. Exposure (High Dynamic Range Color Wheel)
4. Contrast (Primaries Color Bar)
5. Saturation (High Dynamic Range Color Wheel)

## Affinity Studio Instagram Post

1. Color grade and export
2. New project -> Instagram Post -> DPI 72
3. Use 85–90% JPEG quality rather than 100%
4. Sharpen filter
5. Aim for a final file size of roughly 400KB–900KB — comfortably under that 1.5MB second-compression trigger

## Exporting from DaVinci Resolve

Go to the Deliver page (bottom tab)
Render Settings (right panel) → under Export Video and Audio, choose a preset:

Select "Custom" rather than a fixed preset like YouTube, since Instagram isn't in the default list

Set:

Format: MP4
Codec: H.264
Resolution: matches your chosen size — e.g., 1080 x 1920 for Reels/vertical, or 1080 x 1350 for 4:5 feed
Frame rate: match your project/timeline frame rate (don't introduce a mismatch here — same principle as the import discussion)
Quality: set to "Best" or a high bitrate — around 8–12 Mbps for 1080p is a solid target that balances quality and file size

Under Audio, make sure format is AAC, since that's what Instagram expects
Set your file name and output location
Click Add to Render Queue, then Start Render (or Render All if you have multiple in queue)

Crop/reposition using the Inspector (easiest method)

Click the clip on the timeline to select it
Open the Inspector panel (top right)
Under the Video tab, find Zoom and Position:

Zoom: increase this to scale the image up until it fills the vertical frame width — since you're cropping into the center of a wider image, you'll need to zoom in
Position (X/Y): shift the image left/right or up/down to center your subject within the vertical frame — this is where that 9:16 aspect marker framing you set up in-camera pays off, since your subject should already be centered in that zone
