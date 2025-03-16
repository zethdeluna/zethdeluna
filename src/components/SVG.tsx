import ArrowRight from '../assets/svgs/arrow-right.svg';
import ArrowLargeDown from '../assets/svgs/arrow-large-down.svg';
import BrushStroke from '../assets/svgs/brush-stroke.svg';
import Deluna from '../assets/svgs/de-luna.svg';
import Exclamation from '../assets/svgs/exclamation.svg';
import Moon from '../assets/svgs/moon-and-stars.svg';
import PlumeriaSmileyDodger from '../assets/svgs/plumeria-smiley-dodger.svg';
import PlumeriaSmileyHeat from '../assets/svgs/plumeria-smiley-heat.svg';
import PlumeriaSmileyLaker from '../assets/svgs/plumeria-smiley-laker.svg';
import PlumeriaSmileyMpls from '../assets/svgs/plumeria-smiley-mpls.svg';
import SevenLeaves from '../assets/svgs/seven-leaves.svg';
import Star from '../assets/svgs/star-smiley.svg';
import Sun from '../assets/svgs/sun-smiley.svg';
import Thing8 from '../assets/svgs/thing-8.svg';
import ThingBasketball from '../assets/svgs/thing-basketball.svg';
import ThingCoffee from '../assets/svgs/thing-coffee.svg';
import ThingIceCream from '../assets/svgs/thing-ice-cream.svg';
import ThingPlumeria from '../assets/svgs/thing-plumeria.svg';
import ThingSushi from '../assets/svgs/thing-sushi.svg';
import ThingWave from '../assets/svgs/thing-wave.svg';
import ThingWeightPlate from '../assets/svgs/thing-weight-plate.svg';
import Zeth from '../assets/svgs/zeth.svg';

const SVGMap = {
  'arrow-right': ArrowRight,
  'arrow-large-down': ArrowLargeDown,
  'brush-stroke': BrushStroke,
  'deluna': Deluna,
  'exclamation': Exclamation,
  'moon': Moon,
  'plumeria-smiley-dodger': PlumeriaSmileyDodger,
  'plumeria-smiley-heat': PlumeriaSmileyHeat,
  'plumeria-smiley-laker': PlumeriaSmileyLaker,
  'plumeria-smiley-mpls': PlumeriaSmileyMpls,
  'seven-leaves': SevenLeaves,
  'star': Star,
  'sun': Sun,
  'thing-8': Thing8,
  'thing-basketball': ThingBasketball,
  'thing-coffee': ThingCoffee,
  'thing-ice-cream': ThingIceCream,
  'thing-plumeria': ThingPlumeria,
  'thing-sushi': ThingSushi,
  'thing-wave': ThingWave,
  'thing-weight-plate': ThingWeightPlate,
  'zeth': Zeth
};

export type SVGName = keyof typeof SVGMap;

interface SVGProps {
  name: SVGName;
}

const SVG: React.FC<SVGProps> = ({ name }) => {
  const SvgComponent = SVGMap[name];
  return <SvgComponent />;
};

export default SVG;