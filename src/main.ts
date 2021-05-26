import { createNamespace } from 'cls-hooked';
import tracer from 'dd-trace';

tracer.init();

createNamespace('foo');
// ↑ This is just an example of using cls-hooked, in production this got called via subsystems and libraries,
// e.g. the library typeorm-transactional-cls-hooked uses cls-hooked under-the-hood

async function bootstrap(): Promise<void> {
  return Promise.resolve()
  // ↑ This invokes the microtask system… I guess? In production this is where we start and listen to a server,
  // but the Node 16.2 crash appears with any use of promise, even this naked resolve.
}

bootstrap();
