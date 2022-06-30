
# Sequelize Tracking Model History
Tracking your model sequelize who created, updated and deleted.

# How to use
Make sure you have [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) installed.

Generate ModelLog and migration with bash script
```
$ sh node_modules/seq-trackmodel/script/generate-model.sh
```

OR

Create migration and model named ModelLog (or any name)
```
$ sequelize-cli model:generate --name ModelLog --attributes model_name:string,action_type:string,old_data:text,new_data:text,createdby:integer
```

Run migration
```
$ sequelize-cli db:migrate
```

Using hooks to create model log (example: Post Model)
```js
const { CreateModelLog } = require('seq-trackmodel')

const options = {
  userIdKey: 'user_id', // The key for reference to user, default 'user_id'
  modelLogName: 'ModelLog' // Name of log model, default 'ModelLog'
}

hooks: {
  beforeCreate: instance => new CreateModelLog('created', sequelize.models, instance, Post, options),
  beforeUpdate: instance => new CreateModelLog('updated', sequelize.models, instance, Post, options),
  beforeDestroy: instance => new CreateModelLog('deleted', sequelize.models, instance, Post, options)
}
```

individualHooks set true for update/destroy
```js
YourModel[update/destroy]({ where: { /* code */ }, individualHooks: true })
```

![ModelLog](https://i.ibb.co/7YC5yFw/Screenshot-10.png)