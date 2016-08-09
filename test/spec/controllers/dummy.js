/**
 * Created by hayk.avagyan on 09/08/2016.
 */
describe("dummy service", function () {
  var _dummyDataGenerator;
  beforeEach(module("blogApp"));

  beforeEach(inject(function ( dummyDataGenerator) {
    _dummyDataGenerator = dummyDataGenerator;
  }));

  it("should get all dummy posts", function () {
    var posts = _dummyDataGenerator.getPosts();
    expect(posts.length).toBe(25);
    expect(posts[0].id).toBe(0);
  });
  it("should get all dummy Categories", function () {
    var categories = _dummyDataGenerator.getCategories();
    expect(categories[0]).toBe('Category1');
    expect(categories.length).toBe(3);
  });
  it("should get all dummy Authors", function () {
    var blogers = _dummyDataGenerator.getAuthors();
    expect(blogers[2]).toBe('Bloger3');
    expect(blogers.length).toBe(4);
  });
});
