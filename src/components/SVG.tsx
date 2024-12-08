import PlumeriaSmileyDodger from '../assets/svgs/plumeria-smiley-dodger.svg?react';
import PlumeriaSmileyHeat from '../assets/svgs/plumeria-smiley-heat.svg?react';
import PlumeriaSmileyLaker from '../assets/svgs/plumeria-smiley-laker.svg?react';
import PlumeriaSmileyMPLS from '../assets/svgs/plumeria-smiley-mpls.svg?react';
import Zeth from '../assets/svgs/zeth.svg?react';
import DeLuna from '../assets/svgs/de-luna.svg?react';
import Moon from '../assets/svgs/moon-and-stars.svg?react';
import Sun from '../assets/svgs/sun-smiley.svg?react';
import Star from '../assets/svgs/star-smiley.svg?react';
import  ArrowLargeDown from '../assets/svgs/arrow-large-down.svg?react';
import ArrowRight from '../assets/svgs/arrow-right.svg?react';
import Exclamation from '../assets/svgs/exclamation.svg?react';
import SevenLeaves from '../assets/svgs/seven-leaves.svg?react';

interface SVGProps {
	name?: string
};

const SVG: React.FC<SVGProps> = ({ name }) => {

	const renderSVG = () => {
		switch ( name ) {
			case 'plumeria-smiley-dodger':
				return <PlumeriaSmileyDodger />;
			case 'plumeria-smiley-heat':
				return <PlumeriaSmileyHeat />;
			case 'plumeria-smiley-laker':
				return <PlumeriaSmileyLaker />;
			case 'plumeria-smiley-mpls':
				return <PlumeriaSmileyMPLS />;
			case 'zeth':
				return <Zeth />;
			case 'deluna':
				return <DeLuna />;
			case 'moon':
				return <Moon />
			case 'sun':
				return <Sun />;
			case 'star':
				return <Star />;
			case 'arrow-large-down':
				return <ArrowLargeDown />
			case 'arrow-right':
				return <ArrowRight />
			case 'exclamation':
				return <Exclamation />
			case 'seven-leaves':
				return <SevenLeaves />
			default:
				return;
		}
	};

	return renderSVG();

};

export default SVG;