import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
})

export const urlFor = (source: SanityImageSource) => {
  try {
    if (!source) {
      return { url: () => '' } as ReturnType<typeof builder.image>
    }
    return builder.image(source)
  } catch {
    return { url: () => '' } as ReturnType<typeof builder.image>
  }
}
