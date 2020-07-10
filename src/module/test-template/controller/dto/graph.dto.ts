import { NodeDTO, NodeDTOConverter } from "./node.dto";
import { EdgeDTO, EdgeDTOConverter } from "./edge.dto";
import { Graph } from "src/model/template/graph";
import { Node } from "src/model/template/node";
import { Edge } from "src/model/template/edge";
import { ApiProperty } from "@nestjs/swagger";

export class GraphDTO {

    @ApiProperty()
    code: string

    @ApiProperty()
    description: string

    @ApiProperty({type: [EdgeDTO]})
    edges?: EdgeDTO[]

    @ApiProperty({type: [NodeDTO]})
    nodes?: NodeDTO[]
}

export class GraphDTOConverter {

    static convertToModel(graphDTO: GraphDTO) : Graph {

        const nodes: Node[] = []
        graphDTO.nodes.forEach(n => 
            nodes.push(NodeDTOConverter.convertToModel(n))    
        )

        const edges: Edge[] = []
        graphDTO.edges.forEach(e => 
            edges.push(EdgeDTOConverter.convertToModel(e))    
        )

        return {
            code: graphDTO.code,
            description: graphDTO.description,
            nodes: nodes,
            edges: edges
        }

    }

}