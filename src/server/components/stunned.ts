import Component from '@/server/component';

export default class Stunned extends Component {
  public current: boolean;

  public endTime: number;

  constructor(isActive = false, endTime = 0) {
    super();

    this.current = isActive;
    this.endTime = endTime;
  }
}
