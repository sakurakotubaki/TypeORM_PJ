import { User } from "../src/entity/User";
// jestを使ってmockしたテストを書く
jest.mock("../src/entity/User");

// モックの設定
const mockUser = User as jest.MockedClass<typeof User>;
// モックの実装
// mockReturnValueは、モックの戻り値を設定する
mockUser.prototype.getName.mockReturnValue("田中太郎");

// テスト
test("ユーザー情報を取得", () => {
    // モック用のユーザー名を設定
    const user_name = "田中太郎";
    const user = new User();
    // 上で設定したモックの戻り値が返ってくる。.toBeは、値の比較を行う。もし、値が異なる場合はテストが失敗する。
    expect(user.getName()).toBe(user_name);
});

// mockを注入して成功したら通るテスト
test("ユーザー情報を送信", () => {
    const user = new User();
    // モックに注入するオブジェクトを作成
    let userObj = {
        firstName: user.firstName = "田中",
        lastName: user.lastName = "太郎",
        age: user.age = 20
    }
    // mockReturnValueは、モックの戻り値を設定する。今回だと、userObjを返すように設定している。
    mockUser.prototype.postName.mockReturnValue(userObj);
    expect(user.postName()).toBe(userObj);
});