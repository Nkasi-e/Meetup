import React, { useRef } from 'react';
import Card from '../../components/Card';

type DataType = {
  [k: string]: any;
};

const NewMeetupForm = ({ addMeetup }: DataType): JSX.Element => {
  const titleInputRef = useRef<any>();
  const imageInputRef = useRef<any>();
  const addressInputRef = useRef<any>();
  const descriptionInputRef = useRef<any>();

  const submitHandler = (e: any) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData: DataType = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    addMeetup(meetupData);
  };

  return (
    <Card>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meetup title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          <button>Add Meet</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
