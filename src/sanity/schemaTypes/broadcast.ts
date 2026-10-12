import { defineField, defineType } from 'sanity';

export const broadcast = defineType({
  name: 'broadcast',
  title: 'Broadcasts & Live Streams',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Broadcast Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'Category / Channel',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'isLive',
      title: 'Is Currently Live?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'scheduledAt',
      title: 'Broadcast Time / Schedule',
      type: 'datetime',
    }),
    defineField({
      name: 'streamUrl',
      title: 'Stream or Video URL',
      type: 'url',
      description: 'HLS (.m3u8), YouTube Live, or MP4 video URL',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Cover Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage Hero',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isLive: 'isLive',
      media: 'thumbnail',
      scheduledAt: 'scheduledAt',
    },
    prepare({ title, isLive, media, scheduledAt }) {
      const status = isLive ? '🔴 LIVE' : scheduledAt ? new Date(scheduledAt).toLocaleDateString() : 'VOD';
      return {
        title,
        subtitle: status,
        media,
      };
    },
  },
});
