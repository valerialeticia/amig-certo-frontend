import services from '@/services'

export default function (ctx, inject) {
  ctx.app.services = services(ctx)
  inject('services', services(ctx))
}
