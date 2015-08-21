(function(){//即時関数で実行する

    //Model
    var Task = Backbone.Model.extend({//modelのコンストラクタを生成
        defaults: {
            title: "do something!",
            completed: false
        }
    });
    var task = new Task();//モデルのインスタンスを生成

    //View
    var TaskView = Backbone.View.extend({//viewのコンストラクタを生成
        tagName: 'li',//backbone.jsのviewは基本dom要素を作っていくと理解すればいい
        template: _.template( $('#task-template').html() ),
        render: function(){//templateメソッドに中身を渡す為に、renderというfunctionを作る
            var template = this.template( this.model.toJSON() );//ここでテンプレートにオブジェクトがバインディングされたものが、template変数に格納される
            this.$el.html(template);//template変数に格納されたデータがjQueryの.htmlメソッドにて使用される
            return this;//後でチェーンメソッド的なやつを使う為こうしているが、renderの時は常にreturn thisをするというのがベストプラクティス的な書き方になっているので、こう書いておくと良い
        }
    });
    
    //Collection
    
    var Tasks = Backbone.Collection.extend({//コレクションのコンストラクタを生成
        model: Task//modelを渡すと、このTaskに関するCollectionだと認識してくれる
    });
    
    var TasksView = Backbone.View.extend({//コレクションのインスタンスを生成
        tagName: 'ul',//一つ一つのtaskがliなので、それをまとめる要素のulを指定する
        render: function() {//renderする際に、taskモデルのviewを作る
            console.log(this);
            console.log(this.collection);
            //thisはulで、ulのcollectionにliが格納されてる？
            this.collection.each(function(task) {
                var taskView = new TaskView({ model: task });
                this.$el.append(taskView.render().el);
            }, this);
            return this;
        }
    });
    
    
    
    //Tasksコンストラクタ(コレクション)のインスタンスを作る　引数に配列[{},{},{}]を渡し、その中にオブジェクトを渡す
    var tasks = new Tasks([
        {
            title: 'task1',
            completed: true
            
        },
        {
            title: 'task2'
        },
        {
            title: 'task3'
        }
    ]);
    //console.log(tasks.toJSON());
    
    var tasksView = new TasksView({collection: tasks});
    $('#tasks').html(tasksView.render().el);
    
})();





































