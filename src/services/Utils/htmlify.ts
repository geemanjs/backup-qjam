import anchorme from 'anchorme';

export const htmlify = (text: string) => {
  return anchorme(text, {
    attributes: [
      {
        name: 'rel',
        value: 'nofollow noreferrer'
      },
      {
        name: 'target',
        value: '_blank'
      },
      {
        name: 'class',
        value: 'qjam-link'
      }
    ]
  });
};
