import {makeAutoObservable, action, toJS} from 'mobx';
import {Dimensions} from 'react-native';
import IconPack from '../global/IconPack';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
export class LoginStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  sliderWidth = SLIDER_WIDTH;

  itemWidth = ITEM_WIDTH;

  data = [
    {
      title: 'Hand-pickle high quality snacks.',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl: IconPack.WALKTHROUGH_1,
    },
    {
      title: 'Shop global. Mind-blownly affordable.',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl: IconPack.WALKTHROUGH_2,
    },
    {
      title: 'Deliver on the promise of time.',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: IconPack.WALKTHROUGH_3,
    },
  ];
}
export default LoginStore;
