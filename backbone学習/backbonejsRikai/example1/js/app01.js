(function(){//即時関数で実行する

    //Model
    //Taskというmodelコンストラクを作ってみる
    var Task = Backbone.Model.extend();//これを書けば出来上がる
    
    //.extend()の意味・・・Backbone.Model　を継承した新しいモデルを作ります。
    //モデルの属性へ設定したい値をオブジェクトリテラルで指定します。
//    var Model = Backbone.Model.extend();
//    var model = new Model({name: "Tanaka", country: "Japan"});
    
    
    //インスタンスを作る
    var task = new Task();//このmodelインスタンスを操作していく
    //attributeには何も入っていないインスタンスが生成される
    
    //属性を与えたい場合は、引数にオブジェクトを渡す
    var task1 = new Task({
        title: 'do it!',
        completed: true
    });
    //こうすると、このインスタンスのattributeプロパティに反映される
    
    console.log(task);
    console.log(task1);

    //Modelにの属性に初期値を与えたい場合は
    var Task2 = Backbone.Model.extend({
        defaults: {//初期値を格納するプロパティ
            title: 'do something!',//与える初期値
            completed: false//与える初期値
        }
    });
    //このように引数にオブジェクトを与え、その中にdefaultsオブジェクトの中に属性オブジェクトを渡してあげると、インスタンスを生成した際にattribute属性内に反映される。
    var task2 = new Task2();
    console.log(task2);

//    console.log(task2);などでインスタンスの中身を見る際は、console.log(task2.toJSON());の様にtoJSONメソッドを付けると、余分な情報は表示されず、attributeの情報のみがjsonファイル形式で表示される。
    
    
    //getter&setter
    //setter
    //属性に値を設定することができる
    task1.set('title', 'newTitle');//インスタンスのtitleにnewTitleの値を設定することができる。
    console.log(task1.toJSON());
    //getter
    //属性の値を取得することができる
    var title = task1.get('title');
    console.log(title);
    console.log(task1.get('completed'));
    //get()の引数に文字列で値をkeyを指定すると、その値を取得できる。
    
    //属性だけではなく、当然メソッドっぽいものを入れることも可能
    //入れたメソッドはprototype参照内に格納される。
    var Test = Backbone.Model.extend({
        defaults: {
            testes: 1
        },
        sumsum: function() {
            console.log(this);
            this.set('testes', this.get('testes') + 1);
        }
    });
    var test = new Test();
    test.sumsum();
    
    var Task3 = Backbone.Model.extend({
        defaults: {
            greet: 'good morning!'
        },
        changeGreet: function() {
            if(this.get('greet') == 'good morning!'){
                this.set('greet', 'good night!');
            }else if(this.get('greet') == 'good night!'){
                this.set('greet', 'good morning!');
            }
            console.log(this.attributes);
            console.log(this.attributes.greet);
        }/*,
        changeGreet: function() {
            if(this.attributes.greet == 'good morning!'){
                this.attributes.greet = 'good night!';
            }else if(this.attributes.greet == 'good night!'){
                this.attributes.greet = 'good morning!';
            }
        }*/
    });
    var task3 = new Task3();
    
    
    //validate
    //なんらかのvalidationルールを作って、エラーができたらモデルを更新させない
    var Task4 = Backbone.Model.extend({
        defaults: {
            title: 'do something!',
            completed: false
        },
        //ここでvalidationルールを作る
        validate: function(attrs) {//第一引数にはattributesが入る。第二引数にはoptionsが入る
            if( _.isEmpty(attrs.title) ){//もしattributesのtitleが空の場合は
                return "title must not empty!";
            }
        },
        toggle: function(){
            this.set('completed', !this.get('completed'));
        }
    });
    var task4 = new Task4();
    task4.set({title: ''}, {validate: true});//validate:trueというオブジェクトを与えてあげないといけない
    //単純に文字列を返せばエラー認定になる。
    //このバリデーションはsave()の時には呼ばれるけど、set()の時には呼ばれない。
    //set()時にも使いたいなら、{validate: true}をオプションで渡す。
    console.log(task4.toJSON());
    
    task4.set({title: ''});
    console.log(task4.toJSON());
    

    
    var Model = Backbone.Model.extend({
        validate: function (attrs) {
            if (_.isEmpty(attrs.name)) {
                return "Invalid!";
            }
        }
    });

    var model = new Model();

    model.on("error", function (model, error) {
        console.log(error);
    });

    model.set({name: ""}, {validate: true});  //-> "Invalid!"
    
    
    
    var Model = Backbone.Model.extend({
        validate: function (attrs) {
            if (_.isEmpty(attrs.name)) {
                return "Invalid!";
            }
        }
    });

    var model = new Model();

    model.set({name: ""} , {
        error: function (model, error) {
            console.log(error);
    }});
    //-> "Invalid!"
    
    
    
    
    

    
    
})();





































