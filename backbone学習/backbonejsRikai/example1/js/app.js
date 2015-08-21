(function(){//即時関数で実行する

    //Model
    var Task = Backbone.Model.extend({
        defaults: {
            title: "do something!",
            completed: false
        }
    });
    var task = new Task();

    //View
    var TaskView = Backbone.View.extend({
        tagName: 'li',//backbone.jsのviewは基本dom要素を作っていくと理解すればいい
//        className: 'liClass',//class名がつけられる
//        id: 'liId'//id名がつけられる
        template: _.template("<%- title %>"),//templateメソッドを作るunderscore.jsの_.templateメソッドを使用。こうする事で、インスタンスtaskViewのメソッドにtemplateメソッドが作られ、引数にオブジェクトを渡し実行すると、テンプレートとオブジェクトがバインディングされる。
        render: function(){//templateメソッドに中身を渡す為に、renderというfunctionを作る
            var template = this.template( this.model.toJSON() );//ここでテンプレートにオブジェクトがバインディングされたものが、template変数に格納される
            this.$el.html(template);//template変数に格納されたデータがjQueryの.htmlメソッドにて使用される
            return this;//後でチェーンメソッド的なやつを使う為こうしているが、renderの時は常にreturn thisをするというのがベストプラクティス的な書き方になっているので、こう書いておくと良い
        }
    });
    //TaskViewのインスタンスを作成
    var taskView = new TaskView({ model: task });//ここでmodelを渡す必要がある（どのmodelのViewかを指定してる？）。引数にオブジェクトで{ model: task }を渡す。
    console.log(taskView);
    console.log(taskView.template);
    console.log(taskView.el);//.elは自動的に作られ（初期値はdivとなっている。）、.el付けるとliのタグになっている
    console.log(taskView.$el);//.$elにするとjQueryオブジェクトとなり、jQueryのメソッドなどが使えるようになる。
    console.log(taskView.render().el);

})();





































