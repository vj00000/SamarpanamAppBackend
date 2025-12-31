"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTechniqueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_technique_dto_1 = require("./create-technique.dto");
class UpdateTechniqueDto extends (0, swagger_1.PartialType)(create_technique_dto_1.CreateTechniqueDto) {
}
exports.UpdateTechniqueDto = UpdateTechniqueDto;
//# sourceMappingURL=update-technique.dto.js.map