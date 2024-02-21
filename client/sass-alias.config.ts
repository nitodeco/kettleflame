import { resolve } from 'path'
import sass from 'sass'
import { create } from 'sass-alias'

try {
  const sassResolver = sass.renderSync({
    // @ts-expect-error Deprecated but still works
    importer: create({
      '@assets': resolve('src/assets'),
      '@styles': resolve('src/styles'),
    }),
  })

  console.log(sassResolver.css.toString())
} catch (error) {
  console.error(error.message)
}
