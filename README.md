# node-16.2-crash
Repo to show crash when using Node 16.2

## 16.1
```
$ nvm use 16.1; git clean -fdx; yarn install; yarn build; yarn start;    
Now using node v16.1.0 (npm v7.11.2)
Removing dist/
Removing node_modules/
yarn install v1.22.10
warning package.json: No license field
warning node-16.2-crash@0.0.0: No license field
[1/5] 🔍  Validating package.json...
warning node-16.2-crash@0.0.0: No license field
[2/5] 🔍  Resolving packages...
[3/5] 🚚  Fetching packages...
[4/5] 🔗  Linking dependencies...
[5/5] 🔨  Building fresh packages...
✨  Done in 5.47s.
yarn run v1.22.10
warning package.json: No license field
$ tsc -b
✨  Done in 3.14s.
yarn run v1.22.10
warning package.json: No license field
$ node dist/main.js
✨  Done in 0.54s.
```

## 16.2
```
$ nvm use 16.2; git clean -fdx; yarn install; yarn build; yarn start;
Now using node v16.2.0 (npm v7.13.0)
Removing dist/
Removing node_modules/
yarn install v1.22.10
warning package.json: No license field
warning node-16.2-crash@0.0.0: No license field
[1/5] 🔍  Validating package.json...
warning node-16.2-crash@0.0.0: No license field
[2/5] 🔍  Resolving packages...
[3/5] 🚚  Fetching packages...
[4/5] 🔗  Linking dependencies...
[5/5] 🔨  Building fresh packages...
✨  Done in 4.81s.
yarn run v1.22.10
warning package.json: No license field
$ tsc -b
✨  Done in 2.70s.
yarn run v1.22.10
warning package.json: No license field
$ node dist/main.js
/Users/jon/.nvm/versions/node/v16.2.0/bin/node[6689]: ../src/api/callback.cc:125:void node::InternalCallbackScope::Close(): Assertion `(env_->execution_async_id()) == (0)' failed.
 1: 0x10af487e5 node::Abort() (.cold.1) [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 2: 0x109bfbb39 node::Abort() [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 3: 0x109bfb9a1 node::Assert(node::AssertionInfo const&) [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 4: 0x109b2bcdd node::InternalCallbackScope::Close() [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 5: 0x109b2b5de node::InternalCallbackScope::~InternalCallbackScope() [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 6: 0x109bc74a3 node::StartExecution(node::Environment*, std::__1::function<v8::MaybeLocal<v8::Value> (node::StartExecutionCallbackInfo const&)>) [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 7: 0x109b301fd node::LoadEnvironment(node::Environment*, std::__1::function<v8::MaybeLocal<v8::Value> (node::StartExecutionCallbackInfo const&)>) [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 8: 0x109c3d3f0 node::NodeMainInstance::Run(node::EnvSerializeInfo const*) [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
 9: 0x109bc997d node::Start(int, char**) [/Users/jon/.nvm/versions/node/v16.2.0/bin/node]
10: 0x7fff20653f3d start [/usr/lib/system/libdyld.dylib]
11: 0x2 
error Command failed with signal "SIGABRT".
 ```
