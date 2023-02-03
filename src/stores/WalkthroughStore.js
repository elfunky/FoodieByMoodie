import {makeAutoObservable, action, toJS} from 'mobx';
import {Dimensions} from 'react-native';
import IconPack from '../global/IconPack';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export class LoginStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  sliderWidth = SLIDER_WIDTH;

  itemWidth = ITEM_WIDTH;

  get walkThroughData() {
    return [
      {
        id: 1,
        title: 'Aenean leo',
        body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        imgUrl: IconPack.DRAGON,
      },
      {
        id: 2,
        title: 'In turpis',
        body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
        imgUrl: 'https://picsum.photos/id/10/200/300',
      },
      {
        id: 3,
        title: 'Lorem Ipsum',
        body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
        imgUrl: 'https://picsum.photos/id/12/200/300',
      },
    ];
  }
}
export default LoginStore;
