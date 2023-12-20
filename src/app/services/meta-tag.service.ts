import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private metaService: Meta, private titleService: Title) { }

  setBasicTags(title: any, description: any) {
    this.titleService.setTitle(title);
    this.metaService.addTags([
      { name: 'title', content: title },
      { name: 'description', content: description },
    ]);
  }

  setOpenGraphTags(
    title: any,
    description: any,
    url: any,
    type = 'website',
    siteName: any,
    image: any,
    imageUrl: any,
    imageAlt: any,
    imageType = 'image/png',
    imageWidth = '1280',
    imageHeight = '1280'
  ) {
    this.metaService.addTags([
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName },
      { property: 'og:image', content: image },
      { property: 'og:image:url', content: imageUrl },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:image:type', content: imageType },
      { property: 'og:image:width', content: imageWidth },
      { property: 'og:image:height', content: imageHeight },
    ]);
  }

  setTwitterTags(
    title: any,
    description: any,
    url: any,
    image: any,
    imageAlt: any,
    imageWidth = '1280',
    imageHeight = '1280'
  ) {
    this.metaService.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:url', content: url },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: imageAlt },
      { name: 'twitter:image:width', content: imageWidth },
      { name: 'twitter:image:height', content: imageHeight },
    ]);
  }
}
