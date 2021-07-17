import { Api } from '../Api';

class LinkService {
  URI = `${process.env.NEXT_PUBLIC_FIREBASE_DYNAMIC_LINK_API}`;

  get = async (to: string) =>
    await Api.getFromNonBase(this.URI, {
      method: 'POST',
      body: JSON.stringify({
        suffix: {
          option: 'SHORT'
        },
        dynamicLinkInfo: {
          domainUriPrefix: 'https://qjam.page.link',
          link: to,
          androidInfo: {
            androidPackageName: 'com.qjam.rn'
          },
          iosInfo: {
            iosBundleId: 'com.qjam.ios'
          }
        }
      })
    });
}

export const LinksService = new LinkService();
