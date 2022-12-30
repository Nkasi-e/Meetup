type MeetType = {
  id: number;
  title: string;
  address: string;
  image: string;
  description: string;
};

const dummyMeetup: MeetType[] = [
  {
    id: 1,
    title: 'John',
    address: 'johndoe',
    image: 'https://placekitten.com/200/200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 2,
    title: 'Jane',
    address: 'johndoe2',
    image: 'https://placekitten.com/300/300',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
];

export default dummyMeetup;
