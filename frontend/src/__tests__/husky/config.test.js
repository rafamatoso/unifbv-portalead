import config from "../../scripts/husky/config";

const {
  rules,
  MAX_MESSAGE_SIZE,
  FILE_PATH,
  SUCCESS_STATUS,
  ERROR_STATUS,
} = config;

describe("Husky config", () => {
  describe("export", () => {
    test("should export required fields with specific types", async () => {
      expect(config).toHaveProperty("rules");
      expect(config).toHaveProperty("MAX_MESSAGE_SIZE");
      expect(config).toHaveProperty("FILE_PATH");
      expect(config).toHaveProperty("SUCCESS_STATUS");
      expect(config).toHaveProperty("ERROR_STATUS");
    });
  });

  describe("default values", () => {
    test("max message size", async () => {
      expect(MAX_MESSAGE_SIZE).toBe(72);
    });

    test("file path", async () => {
      expect(FILE_PATH).toBe(".git/COMMIT_EDITMSG");
    });

    test("sucess status", async () => {
      expect(SUCCESS_STATUS).toBe(0);
    });

    test("error status", async () => {
      expect(ERROR_STATUS).toBe(1);
    });
    describe("rules", () => {
      const validateRule = (property) => {
        expect(rules).toHaveProperty(property);
        expect(rules[property]).toHaveProperty("description");
        expect(rules[property]).toHaveProperty("examples");
        expect(rules[property]).toHaveProperty("regex");
      };
      test("should have all rules", async () => {
        expect(config).toHaveProperty("rules");

        validateRule("feature");
        validateRule("chore");
        validateRule("bugfix");
        validateRule("hotfix");
        validateRule("test");
      });
    });
  });
});
