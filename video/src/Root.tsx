import { Composition } from "remotion";
import { TrainerPromo } from "./TrainerPromo";
import { KirovPreview } from "./KirovPreview";
import { ScFirebatPreview } from "./ScFirebatPreview";
import { ScMedicPreview } from "./ScMedicPreview";
import { ScScvPreview } from "./ScScvPreview";
import { ArnoldPreview } from "./ArnoldPreview";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TrainerPromo"
        component={TrainerPromo}
        durationInFrames={1400}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="KirovPreview"
        component={KirovPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="ScFirebatPreview"
        component={ScFirebatPreview}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="ScMedicPreview"
        component={ScMedicPreview}
        durationInFrames={1010}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="ScScvPreview"
        component={ScScvPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="ArnoldPreview"
        component={ArnoldPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
